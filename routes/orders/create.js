const Models = require('../../models')
const { order, product, orderDetail } = Models
const { compose, apply, objOf, map, prop, props, pluck } = require('ramda')


module.exports = (req, res) => {

  const ids = pluck('id', req.body.products)
  // get all the products in one query
  const details = product.findAll({
    where: {id: { $in: ids, userId: req.user.id}},
    raw: true
  })
  // make the order details array
  .then((products)=>{
    map((product) => product.makeDetail(req.body.products))
  })

  const order = details
    .then(compose(sum, pluck('total')))
    .then((total) =>
      order.create({
        userId: req.user.id,
        totalUSD: total,
      }, {raw: true}))

  P.all([order, details])
  // save the details with the order id
  .then((order, details) => {
    order.details = map(assoc('orderId', order.id), details)
    orderDetail.bulkCreate(order.details)
    return order.details
  })
  .then(order => res.json({ order }))
  .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
}
