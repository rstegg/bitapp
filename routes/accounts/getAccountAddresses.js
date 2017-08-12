const models = require('../../models')
const R = require('ramda')
const P = require('bluebird')
const coins = require('../../coins')
const validators = require('./validators')

module.exports = {
  spec: R.pick(['accountId', 'currency'], validators),
  fn: ({accountId, currency}) => {
    const check = R.compose(
      coins[currency].checkBalance,
      R.prop('address')
    )
    const addresses = models.Address
    .findAll({where:{accountId, currency }, raw: true })
    return P.map(addresses, R.prop('address'))
  }
}
