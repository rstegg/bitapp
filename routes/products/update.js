const Models = require('../../models')
const { product } = Models
const { pick } = require('ramda')

const productParams = ['unit', 'unitPrice']

module.exports = (req, res) =>
  product.update(
    pick(itemParams, req.body),
    { where: { userId: req.user.id, id: req.params.id } }
  )
  .then(product => res.json(product))
  .catch(error => res.status(400).json({error}))
