const Models = require('../../models')
const { product, item } = Models

const productParams = ['name', 'description', 'image']

module.exports = (req, res) =>
  product.searchByCode(req.user, req.params.code, item)
  .then(products => res.status(200).json({products}))
  .catch(error => res.status(400).json({error}))
