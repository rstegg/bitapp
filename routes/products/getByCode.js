const Models = require('../../models')
const { Product, Item } = Models

const ProductParams = [ 'name', 'description', 'image' ]

module.exports = (req, res) =>
  Product.searchByCode(req.user, req.params.code, Item)
    .then(products => res.status(200).json({ products }))
    .catch(error => res.status(400).json({ error }))
