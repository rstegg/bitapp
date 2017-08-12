const Models = require('../../models')
const { Product, Item } = Models

const productParams = ['name', 'description', 'image']

module.exports = (req, res) =>
  Product.getProductsByUser(req.user, Item)
  .then(products => res.status(200).json({products}))
  .catch(error => res.status(400).json({error}))
