const Models = require('../../models')
const { Payment } = Models

module.exports = (req, res) =>
  Payment.create({
    status: 'pending',
    userId: req.user.id,
    totalUSD: req.body.total
  })
    .then(item => res.status(200).json({ item }))
    .catch(errors => res.status(400).json({ errors }))
