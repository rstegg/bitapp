const  P = require('bluebird')
const exec = require('child_process').exec
const {compose, join,  prepend} = require('ramda')
const run = P.promisify(exec);
const HDPrivateKey = require('bitcore-lib').HDPrivateKey;

const electrum = compose(
    run,
    join(" "),
    prepend('electrum')
  )

const api = module.exports = {}


api.deriveAddress = (xpriv, derivation) =>{
  const privKey = new HDPrivateKey(xpriv)
  const derived = privKey.derive(`m/0/${derivation}'`)
  return derived.privateKey.toAddress()
}
