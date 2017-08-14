const Models = require('../../models')
const { product } = Models
const { pick } = require('ramda')

const productParams = [ 'unit', 'unitPrice' ]

module.exports = (req, res) =>
  product.update(
    pick(productParams, req.body),
    { where: { userId: req.user.id, id: req.params.id }, returning: true, raw: true }
  )
    .then(([ n, [ product ] ]) => !product ? Promise.reject('bad product') : product)
    .then(product => res.json({ product }))
    .catch(error => res.status(400).json({ error }))
