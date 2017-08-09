const api = require('./bitcoin')
const BTC  = api('BTC')
const LTC  = api('LTC')
module.exports = { BTC, LTC}
