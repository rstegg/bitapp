const Models = require('../../models')
const { payment, user } = Models

module.exports = (req, res, next) =>
  payment.findAll({ where: { userId : user.id }, raw: true })
    .then(payments => res.status(200).json({ payments }))
    .catch(error => res.status(400).json({ error }))
