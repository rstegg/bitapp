const Models = require('../../models')
const { Product } = Models

module.exports = (req, res) =>
  Product.create({
    code: req.body.product.code,
    unit: req.body.product.unit,
    unitPrice: req.body.product.unitPrice,
    itemId: req.body.item.id,
    userId: req.user.id,
  })
    .then(product => res.status(200).json({ product }))
    .catch(errors => res.status(400).json({ errors }))
