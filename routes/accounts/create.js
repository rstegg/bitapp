
const models = require("../../models")
const {HDPrivateKey} = require("bitcore-lib")
const {prop} = require('ramda')

module.exports = ()=> {
  const btcPrivKey = (new HDPrivateKey()).toString()
  const ltcPrivKey = (new HDPrivateKey()).toString()
  return models.Account
    .create({btcPrivKey, ltcPrivKey})
    .then((data) => data.get({plain:true}))
    .then(prop('id'))
}
