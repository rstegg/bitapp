const baseUrl = process.env.BITAPI_URL
const { prop } = require('ramda')
const su = require('superagent')

module.exports = {
  startPayment : (account, currency, amountUSD) =>
    su.get(`${baseUrl}/${account}/request/${currency}/${amountUSD}`)
      .set('Accept', 'application/json')
      .then(prop('body'))
}
