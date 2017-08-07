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

module.exports = (account, currency, amountUSD) => {
    const address =  models.Account.findOne({where: {id: account}})
    .then((acc)=> acc.nextAddress(currency))
    const amount = convert(currency, amountUSD)
    return P.join(amount, address,
      (amount, address) => {
        return  {
          url: cryptoURI(currency, address.address, amount),
          currency,
          amount,
          amountUSD
        }
    })
}
