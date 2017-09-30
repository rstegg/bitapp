const P = require('bluebird')
const Models = require('../../models')
const bitapi = require('../../services/bitapi')
const { merge } = require('ramda')
const { Transaction, Order } = Models
/**
 * products {orderId, currency}
 */

module.exports = (req, res) =>
  Order.findOne({
    where: { id: req.body.orderId, userId: req.user.id },
    raw: true
  })
    .then(validOrder => {
      const orderObj = {
        status: 'pending',
        userId: req.user.id,
        orderId: validOrder.id,
        currency: req.body.currency,
        amountUSD: validOrder.totalUSD,
      }
      const requestObj = bitapi.startPayment(req.user.accountId, req.body.currency, validOrder.totalUSD)
      return Promise.all([ requestObj, orderObj ])
    })
    .then(([ newRequest, orderObj ]) => Transaction.create(merge(orderObj, newRequest)))
    .then(transaction => res.json({ transaction }))
    .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
