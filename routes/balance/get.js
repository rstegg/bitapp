const P = require('bluebird')
const Models = require('../../models')
const bitapi = require('../../services/bitapi')
const { merge } = require('ramda')
const { transaction, order } = Models
/**
 * products {orderId, currency}
 */

module.exports = (req, res) => {
  const getBalanceBTC = bitapi.getBalanceBTC(req.user.accountId)
  const getBalanceLTC = bitapi.getBalanceLTC(req.user.accountId)
  return P.all([ getBalanceBTC, getBalanceLTC ])
    .then(([ BTC, LTC ]) => res.json({ BTC, LTC }))
    .catch(error => res.status(400).json({ error }))
}
