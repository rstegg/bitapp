const models = require('../../models')
const R = require('ramda')
const P = require('bluebird')
const coins = require('../../coins')
const validators = require('./validators')
const convert = require('../../coins/convert')
const su = require('superagent')

const toUSD = confirmed =>
  convert.convertToUSD(confirmed)


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

module.exports = {
  spec: R.pick(['accountId', 'currency'], validators),
  fn: ({accountId, currency}) => {

    const check = R.compose(
      coins.checkBalance,
      R.prop('address')
    )

    const addresses = models.Address
      .findAll({ where:{ accountId }, raw: true })

    const mapBalances = P.map(addresses, check)
    const btcPrice = getPrice()

    return P.all([mapBalances, btcPrice])
      .then(([balances, btcPrice]) => {
        const confirmed = R.sum(R.map(R.compose(parseFloat, R.prop('confirmed')), balances))
        const unconfirmed = R.sum(R.map(R.compose(parseFloat, R.prop('unconfirmed')), balances))
        const confirmedUSD = R.multiply(confirmed, btcPrice)
        const unconfirmedUSD = R.multiply(unconfirmed, btcPrice)

        return {
          confirmed,
          unconfirmed,
          confirmedUSD,
          unconfirmedUSD,
          detail: balances
        }
      })
  }
}
