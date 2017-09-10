const R = require('ramda')
const su = require('superagent')

// TODO: AVOID CALLING THIS ON EVERY REQUEST,
// FIXME: MAKE A DIFFERENCE MODULE WITH 2 PRICE STREAMS THAT UPDATE
// THEMSELVES EVERY <X> MINUTES

const getPrice = () =>
  su.get('https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD')
  .then(
    R.pipe(
      R.prop('text'),
      JSON.parse,
      R.path(['result', 'XXBTZUSD', 'p', 0]),
      parseFloat
    )
  )

/**
* Function that converts the amount in USD to an ammount in either LTC or BTC
* @param  {String} currency  the target currency, any of [LTC, BTC]
* @param  {Number} amountUSD  the amount in USD that needs to be converted to CURRENCY
* @return {Promise Number} the corresponding amount in CURRENCY
*/

const convertFromUSD = amountUSD =>
  R.pipe(
    R.divide(amountUSD),
    R.multiply(10e8),
    Math.floor,
    R.divide(R.__, 10e8)
  )

const convert = amountUSD =>
  getPrice()
    .then(convertFromUSD(amountUSD))

convert.convertToUSD = amount =>
  getPrice()
    .then(R.multiply(amount))

module.exports = convert
