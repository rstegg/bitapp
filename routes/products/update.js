const Models = require('../../models')
const { Product } = Models

const productParams = ['unit', 'unitPrice']

module.exports = (req, res) =>
  Product.update(
    productParams,
    { where: { userId: req.user.id, id: req.params.id } }
  )
  .then(product => res.json(product))
  .catch(error => res.status(400).json({error}))
