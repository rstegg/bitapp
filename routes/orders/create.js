const Models = require('../../models')
const { order, product, orderDetail } = Models
const { compose, apply, objOf, map, prop, props } = require('ramda')

module.exports = (req, res) => {
  const ids = map(prop('id'), req.body.products)

  const idPricePair = compose(
    apply(objOf),
    props(['id', 'quantity'])
  )

  const quantities =
    map(idPricePair, req.body.products)

  const makeDetail =
    map((p) =>{
      const q = quantities[p.id]
      return({
        productId: p.id,
        pricePerUnit: p.unitPrice,
        date: Date.now(),
        userId: req.user.id,
        quantity: q,
        total: q * p.unitPrice
    }, p)})



  const details = product.findAll({
    where: {id: { $in: ids, userId: req.user.id}},
    raw: true
  })
  .then(makeDetail)

  const order = details
    .then(compose(sum, map(prop('total'))))
    .then((total) =>
      order.create({
        userId: req.user.id,
        totalUSD: total,
        date: Date.now()
      }, {raw: true}))
  P.all([order, details])
  .then((order, details) => {
    order.details = map(assoc('orderId', order.id), details)
    orderDetail.bulkCreate(order.details)
    return order.details
  })
  .then(order => res.status(200).json({ order }))
  .catch(errors => res.status(400).json({ errors }))
}
