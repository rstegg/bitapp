const models = require('../../models')
const R = require('ramda')
const P = require('bluebird')
const coins = require('../../coins')
const convert = require('../../coins/convert')
const Bacon = require('baconjs')
const validators = require('./validators')

const sumBalances = (prev, current) =>
({
    balance:  current.balance + prev.balance,
    addresses: R.append(current, prev.addresses)
})

const amountProperty = amountUSD =>
  Bacon.fromPromise(convert('BTC', amountUSD))

/**
 * Gets an array of private keys needed to sign the transacion
 * @return {Array PrivateKeys} the array of private keys
 */
const getPrivateKeys = R.curry((balance, xpriv) => {
  const derivations = R.map(R.prop('derivation'), balance.addresses)
  const derivedKeys = coins.derivePrivKeys(xpriv, derivations)
  const privateKeys = R.map(R.prop('privateKey'), derivedKeys)
  return R.merge(balance, {privateKeys})
})

// get balances until you have enough to cover a spend
// it would be nice to have a way to query for the
// if you find it odd to have it as streams is because I will
// later change this to make the query a stream itself

const attachBalance = R.curry((getBalance, address) =>
  Bacon.fromPromise(
    getBalance(address.address)
    .then(R.merge(address))))

// balanceStream :: Currency -> Promise Array Address -> Float
// -> Stream Object {balance: Number, addresses:[Address], total: Number }
const balanceStream = (addresses, amount) => {

  const runningTotal = Bacon.fromPromise(addresses)
    .flatMap(Bacon.fromArray)
    .flatMap(attachBalance(coins.checkBalance))
    .map(R.evolve({confirmed: parseFloat, unconfirmed: parseFloat }))
    .map(balance => R.merge(balance, { balance: balance.confirmed + balance.unconfirmed }))

  const positiveBalance = runningTotal
    .filter(({ balance }) => balance > 0)
    .scan({ balance: 0, addresses: [] }, sumBalances)

  const balanceAndAmount = amount
    .map(R.objOf('amount'))
    .combine(positiveBalance, R.merge)

  const validBalance = balanceAndAmount
    .filter(({amount, balance}) => balance > amount)
    .take(1)

  const invalidBalance = balanceAndAmount
    .last()
    .filter(({amount, balance}) => balance <= amount)

  return { validBalance, invalidBalance }

}

const finalize = (notEnoughBalance, processingPayment) =>
  new P.Promise((resolve, reject) => {

  notEnoughBalance.onValue((total) =>
    resolve(R.merge(total, {
      message: 'Not enough balance to withdraw that amount',
      status: 'error'
    })))

  processingPayment.onValue((total)=>
    resolve(R.merge(total, {
      message: 'Processing payment',
      status: 'success'
      })))
  })

const getChangeAddress = account =>
  balance =>
    Bacon.fromPromise(
      account
      .then(account => account.nextAddress('BTC'))
      .then(address => address.address)
      .then(R.objOf('change'))
      .then(R.merge(balance)))

module.exports = {
  spec:
    R.pick(
      [ 'accountId', 'address', 'amountUSD' ],
      validators),
  fn:
    ({ accountId, amountUSD }) => {
      // get addresses for an account
      const addresses = models.Address
        .findAll({ where: { accountId }, raw: true })

      const account = models.Account
        .findById(accountId)

      const xpriv = Bacon.fromPromise(account)
        .map(acc => acc.getXpriv())
      const change = getChangeAddress(account)
      const amount = amountProperty(amountUSD)

      const { validBalance, invalidBalance } = balanceStream(addresses, amount)

      const processingPayment =
        validBalance
          .map(R.assoc('address', address))
          .flatMap(change)
          .combine(xpriv, getPrivateKeys)
          .map(R.evolve({
            addresses: R.map(R.prop('address'))
          }))
          .map(coins.spend)
          .flatMap(Bacon.fromPromise)
          .map(tx => tx.serialize())
          .map(coins.broadcast)
          .flatMap(Bacon.fromPromise)

      return finalize(invalidBalance, processingPayment)
    }
}
