const accounts = require('./accounts')

module.exports = function setup (app) {
  app.get('/accounts/new', accounts.newAccount)

  app.get('/accounts/:accid/:currency/balance', accounts.checkWalletBalance)
  app.get('/accounts/:accid/:currency/request/:amountUSD', account.requestPayment)
  app.get('/accounts/:accid/:currency/balance/:someAddress', accounts.checkAddressBalance)

  // app.post('/accounts/:accid/send/:currency/:address/:amountUSD')
}
