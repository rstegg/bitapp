const models = require('../../models')
const R = require('ramda')
const coins = require('../../coins')

module.exports = (accountId, currency, address) => {
  return models.Address
    .findOne({where:{accountId, currency, address}})
    .then((address)=> {
      if(R.isNil(address)) throw new Error("Address is not part of this account!")
      return coins[currency].checkBalance(address.address)
    })
}
