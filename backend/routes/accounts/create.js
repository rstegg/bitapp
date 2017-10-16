
const models = require("../../models")
const {HDPrivateKey} = require("bitcore-lib")
const {prop} = require('ramda')

module.exports = {
  spec: {},
  fn: ()=> {
    const privKey = (new HDPrivateKey()).toString()
    return models.Account
    .create({ privKey })
    .then(data => data.get({plain:true}))
    .then(prop('id'))
  }
}
