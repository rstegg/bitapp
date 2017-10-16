const R = require('ramda')
const P = require('bluebird')
const bitcore = require("bitcore-lib")

const runner = require('./electrum')

const { Transaction, HDPrivateKey, Networks } = bitcore

const bitcoin = Networks.livenet


  const electrum = runner('electrum')

  const derivePrivKey = R.curry((xpriv, derivation) =>
    (new HDPrivateKey(xpriv)).derive(`m/0/${derivation}'`))

  const deriveAddress = R.curry((xpriv, derivation) =>
    derivePrivKey(xpriv, derivation).privateKey.toAddress(bitcoin)
  )

  const derivePrivKeys = (xpriv, derivations) =>
    R.map(derivePrivKey(xpriv), derivations)

  const payto = ({ address, addresses, amount, change }) =>
    P.all(R.map(electrum.addressUTXO, addresses))
      .then(R.map(R.construct(Transaction.UnspentOutput)))
      .then(utxos =>
        new Transaction()
          .from(utxos)
          .to(address, Math.floor(amount*1e8))
          .change(change)
      )

  const sign = R.curry(
    (privateKeys, transaction) =>
      transaction.sign(privateKeys))

  const spend = payment =>
    payto(payment)
      .then(sign(payment.privateKeys))
      .then(R.tap(console.log))

  const api = R.merge({
    derivePrivKey,
    deriveAddress,
    derivePrivKeys,
    payto,
    sign,
    spend,
  }, electrum)

module.exports = api
