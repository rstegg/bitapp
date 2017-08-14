const Models = require('../../models')
const { Payment } = Models

module.exports = (req, res) =>
  Payment.destroy({ where: { id: req.params.id, userId: req.user.id } })
    .then(item => res.status(200).json({ item }))
    .catch(error => res.status(400).json({ error }))
