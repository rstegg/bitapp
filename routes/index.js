const router = require('express').Router()

const accounts = require('./accounts')
const auth = require('./auth')

module.exports =
  router
    .use('/auth', auth.phone)
    .get('/accounts/new', accounts.newAccount)
    .get('/accounts/:accountId/request/:currency/:amountUSD', accounts.requestPayment)
    .get('/accounts/:accountId/balance/:currency/:address', accounts.checkAddressBalance)
    .get('/accounts/:accountId/balance/:currency', accounts.checkWalletBalance)
    .get('/accounts/:accountId/addresses/:currency', accounts.getAccountAddresses)
    .get('/accounts/:accountId/send/:currency/:address/:amountUSD', accounts.spend)
