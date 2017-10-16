const R = require('ramda')
const P = require('bluebird')
const exec = require('child_process').exec
const run = P.promisify(exec);

const parseOutput = R.pipe(R.trim, JSON.parse)

module.exports = command => {
  const electrum =
    R.compose(
      x => x.then(parseOutput),
      run,
      R.join(" "),
      R.prepend(command)
    )

  // electrum functions to be separated on a new module
  const checkBalance = (address) =>
    electrum(['getaddressbalance', address])
      .then(R.assoc('address', address))

  const getAddresUnspent = (address) =>
    electrum(['getaddressunspent', address])

  const getTransaction = (txid) =>
    electrum(['gettransaction', txid])

  const deserialize = (hex) =>
    electrum(['deserialize', hex])

  const addressUTXO = (address) => {
    //txid and vout
    const idAndVout =
      getAddresUnspent(address)
        .then(R.nth(0))
        .then(R.pick(['tx_hash', 'tx_pos']))

    const tx =
      idAndVout
        .then(R.prop('tx_hash'))
        .then(getTransaction)
        .then(R.prop("hex"))
        .then(deserialize)
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

  const broadcast = transaction => electrum(['broadcast', transaction])

  return {
    checkBalance,
    getAddresUnspent,
    getTransaction,
    deserialize,
    addressUTXO,
    broadcast,
  }
}




// const R = require('ramda')
// const P = require('bluebird')
// const exec = require('child_process').exec
// const run = P.promisify(exec);
//
// const parseElectrum = x => x.then(R.pipe(R.trim, JSON.parse)),
//
// const combineTxAndID = ({ tx_hash, tx_pos }, outputs) =>
//   ({
//     txid : tx_hash,
//     vout : tx_pos,
//     address : address,
//     scriptPubKey : outputs[tx_pos].scriptPubKey,
//     amount : output.value/1e8
//   })
//
// module.exports = command => {
//
//     // electrum functions to be separated on a new module
//   const electrum =
//     R.pipe(
//       R.prepend(command)
//       R.join(" "),
//       run,
//       parseElectrum,
//     )
//
//   const checkBalance = (address) =>
//     electrum(['getaddressbalance', address])
//       .then(R.assoc('address', address))
//
//   const getAddresUnspent = (address) =>
//     electrum(['getaddressunspent', address])
//
//   const getTransaction = (txid) =>
//     electrum(['gettransaction', txid])
//
//   const deserialize = (hex) =>
//     electrum(['deserialize', hex])
//
//   const idAndVout = address =>
//     getAddresUnspent(address)
//       .then(R.nth(0))
//       .then(R.pick(['tx_hash', 'tx_pos']))
//
//   const tx = idAndVout
//     .then(R.prop('tx_hash'))
//     .then(getTransaction)
//     .then(R.prop("hex"))
//     .then(deserialize)
//     .then(R.prop('outputs'))
//
//
//
//   const addressUTXO = (address) =>
//     P.join(idAndVout, tx, combineTxAndID)
//
//   const broadcast = transaction => electrum(['broadcast', transaction])
//
//   return {
//     checkBalance,
//     getAddresUnspent,
//     getTransaction,
//     deserialize,
//     addressUTXO,
//     broadcast,
//   }
// }
