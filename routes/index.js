const accounts = require('./accounts')

module.exports = function setup (app) {
  app.get('/accounts/new', accounts.newAccount)

  app.get('/accounts/:accountId/request/:currency/:amountUSD', accounts.requestPayment)
  app.get('/accounts/:accid/balance/:currency', accounts.checkWalletBalance)
  // app.get('/accounts/:accid/balance/:currency/:someAddress', accounts.checkAddressBalance)

  // app.post('/accounts/:accid/send/:currency/:address/:amountUSD')
}
