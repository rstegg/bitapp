const Models = require('../../models')
const { product } = Models

module.exports = (req, res) =>
  product.create({
    unit: req.body.unit,
    code: req.body.code,
    unitPrice: req.body.unitPrice,
    itemId: req.body.itemId,
    userId: req.user.id,
  })
  .then(product => res.status(200).json({product}))
  .catch(errors => res.status(400).json({errors}))
