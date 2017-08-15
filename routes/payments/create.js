const P = require('bluebird')
const Models = require('../../models')
const bitapi = require('../../services/bitapi')
const { merge } = require('ramda')
const { payment, order } = Models
/**
 * products {orderId, currency}
 */

module.exports = (req, res) =>
  order.findById(req.body.orderId)
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
        .then(newRequest => payment.create(merge(orderObj, newRequest)))
    })
    .then(newPayment => { console.log(newPayment); res.json({ payment: newPayment }) })
    .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
