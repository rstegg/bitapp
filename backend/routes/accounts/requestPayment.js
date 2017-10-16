/** `GET /accounts/:accid/:currency/request/:amountUSD`
 *  bip21 url that frontend can turn into qr, and address to check status
 */
const protocols = {
  LTC: 'litecoin',
  BTC: 'bitcoin'
}

const cryptoURI =
  (currency, address, amount) =>
    `${protocols[currency]}:${address}?amount=${amount}`

const models = require('../../models')

const R = require('ramda')
const P = require('bluebird')
const convert = require('../../coins/convert');
const validators = require('./validators')

module.exports = {

  spec: R.pick(["accountId", "currency", "amountUSD"], validators),

  fn: ({accountId, currency, amountUSD}) => {

    const address =
      models.Account
        .findById(accountId)
        .then(acc => acc.nextAddress())

    const amount = convert(amountUSD)

    const createResponse = (amount, address) =>
      ({
        url: cryptoURI(currency, address.address, amount),
        currency,
        amount,
        amountUSD
      })

    return P.join(amount, address, createResponse)
    .catch(console.log)
  }
}
