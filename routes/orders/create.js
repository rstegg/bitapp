const Models = require('../../models')
const { order, product, orderDetail } = Models
const { sum, compose, splitEvery, unnest, map, product: prod, pluck, zip, zipObj } = require('ramda')
const P = require('bluebird')

const orderDetailAttrs = ['unitPrice','quantity','total']

module.exports = (req, res) =>
  product.findAll({
    where: { id: { $in: pluck('id', req.body.products) }, userId: req.user.id },
    raw: true
  })
  .then(products => {
    const quantities = pluck('quantity', req.body.products)

    const unitPrices = pluck('unitPrice', products)
    const quantityPrices = zip(quantities, unitPrices)
    const totals = map(prod, quantityPrices)
    const totalUSD = sum(totals)

    const productsWithDetails = products.map((product, i) => Object.assign({}, product, { quantity: quantities[i], total: totals[i] }))
    console.log(productsWithDetails);
    return order.create({
       totalUSD,
       products: productsWithDetails,
       userId: req.user.id,
     }, { raw: true })
  })
  .then(order => res.json({ order }))
  .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
