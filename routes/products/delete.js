const Models = require('../../models')
const { Product } = Models

module.exports = (req, res) =>
  Product.destroy({ where: { id: req.params.id, userId: req.user.id } })
    .then(product => res.status(200).json({ product }))
    .catch(error => res.status(400).json({ error }))
