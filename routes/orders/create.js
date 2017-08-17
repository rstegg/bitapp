const Models = require('../../models')
const { order, product, orderDetail } = Models
const { sum, compose, splitEvery, unnest, map, product: Product, pluck, zip, zipObj } = require('ramda')
const P = require('bluebird')

const orderDetailAttrs = [ 'unitPrice','quantity','total' ]

module.exports = (req, res) =>
  product.findAll({
    where: { id: { $in: pluck('id', req.body.products) }, userId: req.user.id }
  })
    .then(products => {
      const quantities = pluck('quantity', req.body.products)
      const unitPrices = pluck('unitPrice', products)
      const quantityPrices = zip(quantities, unitPrices)
      const totals = map(Product, quantityPrices)
      const totalUSD = sum(totals)
      const makeDetails = map(zipObj(orderDetailAttrs))
      const detailsArrNested = zip(quantityPrices, totals)
      const detailsArr = splitEvery(3, unnest(unnest(detailsArrNested)))
      const details = makeDetails(detailsArr)

      const newOrder = order.create({
        totalUSD,
        userId: req.user.id,
      }, { raw: true })

      const orderDetails = orderDetail.bulkCreate(details)

      return P.all([ newOrder, orderDetails ])
    })
    .then(([ order, orderDetails ]) => res.json({ order }))
    .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
