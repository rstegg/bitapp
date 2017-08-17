const Models = require('../../models')
const { order } = Models

module.exports = (req, res, next) =>
  order.findAll({ where: { userId: req.user.id } })
    .then(orders =>
      !orders ? Promise.reject('No orders')
        : orders
    )
    .then(orders => res.status(200).json({ orders }))
    .catch(error => res.status(400).json({ error }))
