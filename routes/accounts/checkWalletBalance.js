const models = require('../../models')
const R = require('ramda')
const P = require('bluebird')
const coins = require('../../coins')
const validators = require('./validators')
const convert = require('../../coins/convert')

module.exports ={
  spec: R.pick(['accountId', 'currency'], validators),
  fn: ({accountId, currency}) => {

    const check = R.compose(
      coins[currency].checkBalance,
      R.prop('address')
    )

    const addresses = models.Address
      .findAll({where:{accountId, currency }, raw: true })

    return P.map(addresses, check)
      .then((balances)=>{
        const confirmed = R.map(  R.compose(parseFloat, R.prop('confirmed')), balances)
        const unconfirmed = R.map(R.compose(parseFloat, R.prop('unconfirmed')), balances)
        const confirmedUSD = confirmed.map(confirmed => convert.convertToUSD(currency, confirmed))
        const unconfirmedUSD = confirmed.map(confirmed => convert.convertToUSD(currency, confirmed))
        return {
          confirmed: R.sum(confirmed),
          unconfirmed: R.sum(unconfirmed),
          confirmedUSD: R.sum(confirmedUSD),
          unconfirmedUSD: R.sum(unconfirmedUSD),
          detail:balances
        }
      })
  }
}
