const  P = require('bluebird')
const exec = require('child_process').exec
const R = require('ramda')
const {compose, join, prepend } = R
const bitcore = require('bitcore-lib')
const {Transaction, HDPrivateKey} = bitcore;
const run = P.promisify(exec);
const electrum = compose(
    run,
    join(" "),
    prepend('electrum-ltc')
  )

const litecoin = require('./litecoin-net')
const api = module.exports = {};

api.deriveAddress = (xpriv, derivation) =>{
  const privKey = new HDPrivateKey(xpriv)
  const derived = privKey.derive(`m/0/${derivation}'`)
  return derived.privateKey.toAddress(litecoin)
}

api.checkBalance = (address) =>
  electrum(['getaddressbalance', address])
  .then(R.pipe(R.trim, JSON.parse, R.assoc('address', address)))

api.getAddresUnspent = (address) =>
  electrum(['getaddressunspent', address])
    .then(R.pipe(R.trim, JSON.parse))

api.getTransaction = (txid) =>
  electrum(['gettransaction', txid])
    .then(R.pipe(R.trim, JSON.parse))

api.deserialize = (hex) =>
  electrum(['deserialize', hex])
  .then(R.pipe(R.trim, JSON.parse))

api.addressUTXO = (address) =>{
  //txid and vout
  const idAndVout = api.getAddresUnspent(address)
    .then(R.nth(0))
    .then(R.pick(['tx_hash', 'tx_pos']))

  const tx = idAndVout
    .then(R.prop('tx_hash'))
    .then(api.getTransaction)
    .then(R.prop("hex"))
    .then(api.deserialize)
    .then(R.prop('outputs'))

  return P.join(idAndVout, tx, function ({tx_hash, tx_pos}, outputs) {
    const output =  outputs[tx_pos]

    return  new Transaction.UnspentOutput({
      "txid" : tx_hash,
      "vout" : tx_pos,
      "address" : address,
      "scriptPubKey" : output.scriptPubKey,
      "amount" : output.value/1e8
    })
  })
}

api.spend = (address, change,  amount, sources) => {
  // get the set of utxos
  // get the set of private keys

  const transaction = new Transaction()
    .from(utxos)          // Feed information about what unspent outputs one can use
    .to(address, amount)  // Add an output with the given amount of satoshis
    .change(address)      // Sets up a change address where the rest of the funds will go
    .sign(privkeySet)
}
