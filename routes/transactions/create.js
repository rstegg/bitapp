const P = require('bluebird')
const Models = require('../../models')
const bitapi = require('../../services/bitapi')
const { merge } = require('ramda')
const { transaction, order } = Models
/**
 * products {orderId, currency}
 */

module.exports = (req, res) =>
  order.findOne({
    where: { id: req.body.orderId, userId: req.user.id },
    raw: true
  })
    .then(foundOrder => {
      const orderObj = {
        status: 'pending',
        userId: req.user.id,
        orderId: foundOrder.id,
        currency: req.body.currency,
        amountUSD: foundOrder.totalUSD,
      }
      const requestObj = bitapi.startPayment(1, req.body.currency, foundOrder.totalUSD)

      return requestObj
        .then(newRequest => transaction.create(merge(orderObj, newRequest)))
    })
    .then(newTransaction => { console.log(newTransaction); res.json({ transaction: newTransaction }) })
    .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
