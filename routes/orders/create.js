const Models = require('../../models')
const { order, product, orderDetail } = Models
const { assoc, pipe, apply, sum, unfold, objOf, map, multiply, prop, props, pluck, product: Product, zip } = require('ramda')
const P = require('bluebird')

module.exports = (req, res) => {
  const ids = pluck('id', req.body.products)
  product.findAll({
    where: { id: { $in: ids }, userId: req.user.id }
  })
  .then(products => {
    const quantities = pluck('quantity', req.body.products)
    const unitPrices = pluck('unitPrice', products)
    const quantityPrices = zip(quantities, unitPrices)
    const totals = map(Product, quantityPrices)
    const totalUSD = sum(totals)
    return order.create({
      products,
      totalUSD,
      userId: req.user.id,
    }, { raw: true })
  })
  .then(order => res.json({ order }))
  .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
}
