const models = require('../../models')
const R = require('ramda')
const coins = require('../../coins')
const validators = require('./validators')

module.exports = {
  spec: R.pick(['accountId', 'currency', 'address'], validators),
  fn: ({accountId, currency, address}) => {
  return models.Address
    .findOne({where:{accountId, currency, address}})
    .then((address)=> {
      if(R.isNil(address)) throw new Error("Address is not part of this account!")
      return coins.checkBalance(address.address)
    })
}}
