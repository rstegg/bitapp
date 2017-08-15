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

      return P.all([orderObj, requestObj])
        .then((orderObj, requestObj) => payment.create(merge(orderObj, requestObj)))
        .then(merge(requestObj))
        .then(payment => res.status(200).json({ payment }))
        .catch(errors => res.status(400).json({ errors }))
    })
