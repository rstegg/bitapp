const Models = require('../../models')
const { product } = Models

module.exports = (req, res) =>
  product.create({
    code: req.body.product.code,
    unit: req.body.product.unit,
    unitPrice: req.body.product.price,
    itemId: req.body.item.id,
    userId: req.user.id,
  })
    .then(product => res.status(200).json({ product }))
    .catch(errors => res.status(400).json({ errors }))
