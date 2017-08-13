const Models = require('../../models')
const { Payment } = Models


module.exports = (req, res) =>
  Payment.getPaymentsByUser(req.user)
  .then(items => res.status(200).json({items}))
  .catch(error => res.status(400).json({error}))
