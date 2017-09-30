const Models = require('../../models')
const { Transaction } = Models

module.exports = (req, res, next) =>
  Transaction.findAll({ where: { userId: req.user.id }, raw: true })
    .then(transactions => res.status(200).json({ transactions }))
    .catch(error => res.status(400).json({ error }))
