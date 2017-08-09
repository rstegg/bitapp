const R = require('ramda')
const P = require('bluebird')
const bitcore = require("bitcore-lib")

const runner = require('./electrum')

const {Transaction, HDPrivateKey, Networks } = bitcore

const litecoin = require('./litecoin-net')
const bitcoin = Networks.livenet

const commands = {
  BTC: 'electrum',
  LTC: 'electrum-ltc',
}

const networks = {
  BTC: bitcoin,
  LTC: litecoin,
}

module.exports = function (currency) {
  const electrum = runner(commands[currency])
  const api = {}

  api.derivePrivKey = R.curry((xpriv, derivation) =>
    (new HDPrivateKey(xpriv)).derive(`m/0/${derivation}'`))

  api.deriveAddress = R.curry((xpriv, derivation) =>
    api.derivePrivKey(xpriv, derivation).privateKey.toAddress(networks[currency])
  )

  api.derivePrivKeys = (xpriv, derivations) =>
    R.map(api.derivePrivKey(xpriv), derivations)

  api.payto = (payment) => {
    const sources = payment.addresses
    const {address, amount, change} = payment
    const utxos = R.map(electrum.addressUTXO, sources)
    return P.all(utxos)
      .then(R.map(R.constructor(Transaction.UnspentOutput)))
      .then((utxos)=>
        new Transaction()
          .from(utxos)
          .to(address, Math.floor(amount*1e8))
          .change(change)
    )
  }

  api.sign = R.curry(
    (privateKeys, transaction) =>
      transaction.sign(privateKeys))

  api.spend = (payment) =>{
    return api.payto(payment)
    .then(api.sign(payment.privateKeys))
    .then(R.tap(console.log))
  }

  // broadcast

  return R.merge(api, electrum)
}
