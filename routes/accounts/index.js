const create = require('./create')
const newAddress = require('./requestPayment')
const checkAddressBalance = require('./checkAddressBalance')
const checkWalletBalance = require('./checkWalletBalance')
const getAccountAddresses = require('./getAccountAddresses')
const spend = require('./spend')
module.exports = {
  newAccount : (req, res, next) => {
    create()
    .then(x => res.json(x))
    .catch(next)
  },
  requestPayment: (req, res, next) =>{
    const {accountId, currency, amountUSD} = req.params
    newAddress(accountId, currency, amountUSD)
    .then(x => res.json(x))
    .catch(next)
  },
  checkAddressBalance : (req, res, next) =>{
    const {accountId, currency, address } = req.params
    checkAddressBalance(accountId, currency, address)
    .then(x => res.json(x))
    .catch(next)
  },
  getAccountAddresses : (req, res, next) =>{
    const {accountId, currency } = req.params
    getAccountAddresses(accountId, currency)
    .then(x => res.json(x))
    .catch(next)
  },
   checkWalletBalance: (req, res, next) =>{
   const {accountId, currency, address } = req.params
   checkWalletBalance(accountId, currency)
   .then(x => res.json(x))
   .catch(next)
  },

  spend: (req, res, next) =>{
   const {accountId, currency, amountUSD, address} = req.params
   spend(accountId, currency, address, amountUSD)
   .then(x => res.json(x))
   .catch(next)
  }
}
