const networks = require("bitcore-lib").Networks
module.exports = networks.add({
  name: 'litecoin',
  alias: 'mainlite',
  pubkeyhash: 0x30,
  privatekey: 0xb0,
  scripthash: 0x05,
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  networkMagic: 0xfcc1b7dc,
  port: 9333,
  dnsSeeds: [
    'dnsseed.litecointools.com',
    'dnsseed.litecoinpool.org',
    'dnsseed.ltc.xurious.com',
    'dnsseed.koin-project.com',
    'dnsseed.weminemnc.com'
  ]
})
