const accounts = require('./accounts')

module.exports = function setup (app) {
  app.get('/accounts/new', accounts.newAccount)

  app.get('/accounts/:accountId/request/:currency/:amountUSD', accounts.requestPayment)
  app.get('/accounts/:accountId/balance/:currency/:address', accounts.checkAddressBalance)
  app.get('/accounts/:accountId/balance/:currency', accounts.checkWalletBalance)
  app.get('/accounts/:accountId/addresses/:currency', accounts.getAccountAddresses)
  app.get('/accounts/:accountId/send/:currency/:address/:amountUSD', accounts.spend)

}
