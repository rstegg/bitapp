const R = require('ramda')
const su = require('superagent')
const priceApi= (currency) => `https://api.kraken.com/0/public/Ticker?pair=${currency}`

// TODO: AVOID CALLING THIS ON EVERY REQUEST,
// FIXME: MAKE A DIFFERENCE MODULE WITH 2 PRICE STREAMS THAT UPDATE
// THEMSELVES EVERY <X> MINUTES

const getPrice  = (currency) =>
  su.get(priceApi(currency))
  .then(R.pipe(
    R.prop('text'),
    JSON.parse,
    R.path(['result', currency, 'p', 0]),
    parseFloat))

const LTC = "XLTCZUSD"
const BTC = "XXBTZUSD"
const pairs = {LTC, BTC}

/**
* Function that converts the amount in USD to an ammount in either LTC or BTC
* @param  {String} currency  the target currency, any of [LTC, BTC]
* @param  {Number} amountUSD  the amount in USD that needs to be converted to CURRENCY
* @return {Promise Number} the corresponding amount in CURRENCY
*/

const convert = (currency, amountUSD) =>
  getPrice(pairs[currency])
    .then(R.pipe(
      R.divide(amountUSD),
      R.multiply(10e8),
      Math.floor,
      R.divide(R.__, 10e8)))

convert.convertToUSD = (currency, amount) =>
  getPrice(pairs[currency])
    .then(R.multiply(amount))

module.exports = convert
