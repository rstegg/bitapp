const R = require('ramda')
const P = require('bluebird')
const exec = require('child_process').exec
const run = P.promisify(exec);

module.exports = function (command) {
  const electrum = R.compose(
    (x) => x.then(R.pipe(R.trim, JSON.parse)),
    run,
    R.join(" "),
    R.prepend(command))
  const api = {};
  // electrum functions to be separated on a new module
  api.checkBalance = (address) =>
    electrum(['getaddressbalance', address])
      .then(R.assoc('address', address))

  api.getAddresUnspent = (address) =>
    electrum(['getaddressunspent', address])

  api.getTransaction = (txid) =>
    electrum(['gettransaction', txid])

  api.deserialize = (hex) =>
    electrum(['deserialize', hex])

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

    return P.join(idAndVout, tx, ({tx_hash, tx_pos}, outputs) => {
      const output =  outputs[tx_pos]
      return {
        "txid" : tx_hash,
        "vout" : tx_pos,
        "address" : address,
        "scriptPubKey" : output.scriptPubKey,
        "amount" : output.value/1e8
      }
    })
  }

  api.broadcast = (transaction) => electrum(['broadcast', transaction])

  return api
}
