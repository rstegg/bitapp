const models = require('../../models')
const R = require('ramda')
const P = require('bluebird')
const coins = require('../../coins')
const convert = require('../../coins/convert')
const Bacon = require('baconjs')

const sumBalances = (prev, current) => {
  return {
    balance: prev.balance + current.balance,
    addresses: R.append(current.address, prev.addresses)
  }
}
const amountProperty = (currency, amountUSD) =>{
  return Bacon.fromPromise(convert(currency, amountUSD))
}

// get balances until you have enough to cover a spend
const balanceStream = (currency, addresses, amount) =>{
  const runningTotal = Bacon.fromPromise(addresses)
    .flatMap(Bacon.fromArray)
    .flatMap((address)=>Bacon.fromPromise(coins[currency].checkBalance(address.address)))
    .map(R.evolve({confirmed: parseFloat, unconfirmed: parseFloat}))
    .map(R.applySpec({
      balance: ({confirmed, unconfirmed}) => confirmed + unconfirmed,
      address: R.prop('address')
    }))
    .scan( {balance: 0, addresses: []}, sumBalances)

  return amount
    .combine(runningTotal, (amount, total) => R.merge(total, {amount}))
    .takeWhile(({amount, balance}) => balance < amount)
    .last()
}
module.exports = (accountId, currency, address,  amountUSD) => {
  // get addresses for an account
  const addresses = models.Address
    .findAll({where:{accountId, currency }, raw: true })


  const change = Bacon.fromPromise(
    models.Account
      .findOne({where:{id: accountId }})
      .then((account) => account.nextAddress(currency))
      .then((address) => address.address)
      .then(R.objOf('change')))

  const amount = amountProperty(currency, amountUSD)
  const balance = balanceStream(currency, addresses, amount)

  const notEnoughBalance =  balance.filter(
    total => (total.balance > total.amount))

  const processingPayment = balance.filter(
    total => (total.balance < total.amount))
    .map(R.assoc("address", address))
    .combine(change, R.merge)

    // need to query for privatekeys

  return new P.Promise(function (resolve, reject) {
    notEnoughBalance.onValue((total)=>{
      resolve(R.merge(total, {
        message: "You don't have enough balance to pay that amount",
        status: "error"
      }))
    })

    processingPayment.onValue((total)=>{
      resolve(R.merge(total, {
        message: "Processing payment",
        status: "success"
      }))
    })
  })
    // get a change address
    // get utxos for the addresses with balance
}
