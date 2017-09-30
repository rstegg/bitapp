const Models = require('../../models')
const { Product } = Models
const { pick } = require('ramda')

const ProductParams = [ 'unit', 'unitPrice' ]

module.exports = (req, res) =>
  Product.update(
    pick(ProductParams, req.body.product),
    { where: { userId: req.user.id, id: req.params.id }, returning: true, raw: true }
  )
    .then(([ n, [ product ] ]) => !product ? Promise.reject('bad product') : product)
    .then(product => res.json({ product }))
    .catch(error => res.status(400).json({ error }))
