const models = require('../../models')
const R = require('ramda')
const P = require('bluebird')
const coins = require('../../coins')

module.exports = (accountId, currency) => {
  const check = R.compose(
    coins[currency].checkBalance,
    R.prop('address')
  )
  const addresses = models.Address
    .findAll({where:{accountId, currency }, raw: true })
  return P.map(addresses, R.prop('address'))
}
