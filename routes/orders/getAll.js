const Models = require('../../models')
const { Order } = Models

module.exports = (req, res, next) =>
  Order.findAll({ where: { userId: req.user.id } })
    .then(orders =>
      !orders ? Promise.reject('No orders')
        : orders
    )
    .then(orders => res.status(200).json({ orders }))
    .catch(error => res.status(400).json({ error }))
