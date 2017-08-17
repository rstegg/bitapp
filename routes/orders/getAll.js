const Models = require('../../models')
const { order } = Models

module.exports = (req, res, next) =>
  order.findAll({ where: { userId: req.user.id }, raw : true })
    .then(orders => res.status(200).json({ orders }))
    .catch(error => res.status(400).json({ error }))
