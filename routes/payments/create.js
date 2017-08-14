const P = require('bluebird')
const Models = require('../../models')
const bitapi = require('../../services/bitapi')
const { merge } = require('ramda')
const { payment, order } = Models
/**
 * products {orderId, currency}
 */
module.exports = (req, res) => {
  const paymentObj = order.findById(req.body.orderId)
  .then((order) => {
    return {
      status: 'pending',
      userId: req.user.id,
      orderId: req.body.orderId,
      date: Date.now(),
      currency: req.body.currency,
      amountUSD: order.totalUSD,
    }
  })
  const paymentRequest = paymentObj
    .then(({amountUSD, currency}) =>
      bitapi.startPayment(1, currency, amountUSD)
    )
  P.all([paymentObj, paymentRequest])
  .then((paymentObj, request)=>
    payment.create(merge(payment, request), {raw: true})
    .then(merge(request))
  )
  .then(payment => res.status(200).json({ payment }))
  .catch(errors => res.status(400).json({ errors }))
}
