const  P = require('bluebird')
const exec = require('child_process').exec
const {compose, join, length,   prepend, split, tap, trim} = require('ramda')
const HDPrivateKey = require('bitcore-lib').HDPrivateKey;

const litecoin = require('./litecoin-net')
const run = P.promisify(exec);
const electrum = compose(
    run,
    join(" "),
    prepend('electrum-ltc')
  )

const api = module.exports = {};

api.privateKey = () => new HDPrivateKey().toString();
