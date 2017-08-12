const Models = require('../../models')
const { Product } = Models

module.exports = (req, res) =>
  Product.create({
    unit: req.body.unit,
    unitPrice: req.body.unitPrice,
    itemId: req.body.itemId,
    userId: req.user.id,
  })
  .then(product => res.status(200).json({product}))
  .catch(errors => res.status(400).json({errors}))
