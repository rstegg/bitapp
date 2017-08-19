const baseUrl = process.env.BITAPI_URL
const { prop } = require('ramda')
const su = require('superagent')

module.exports = {
  startPayment: (account, currency, amountUSD) =>
    su.get(`${baseUrl}/${account}/request/${currency}/${amountUSD}`)
      .set('Accept', 'application/json')
      .then(prop('body')),
  createAccount: () =>
    su.get(`${baseUrl}/new`)
      .set('Accept', 'application/json')
      .then(prop('body')),
  createAccount: () =>
    su.get(`${baseUrl}/new`)
      .set('Accept', 'application/json')
      .then(prop('body')),
  getBalanceBTC: account =>
    su.get(`${baseUrl}/${account}/balance/BTC`)
      .set('Accept', 'application/json')
      .then(prop('body')),
  getBalanceLTC: account => 
    su.get(`${baseUrl}/${account}/balance/LTC`)
      .set('Accept', 'application/json')
      .then(prop('body')),
}
