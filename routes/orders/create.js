const P = require('bluebird')
const { sum, merge, compose, splitEvery, unnest, map, product, pluck, zip, zipObj } = require('ramda')

const Models = require('../../models')
const bitapi = require('../../services/bitapi')

const { Product, Transaction, Order } = Models

module.exports = (req, res) =>
  Product.findAll({
    where: { id: { $in: pluck('id', req.body.products) }, userId: req.user.id },
    include: [ {
      model: item,
      attributes: [ 'name', 'description', 'image' ]
    } ]
  })
  .then(products => products.map(product => product.toJSON()))
  .then(products => {
    const quantities = pluck('quantity', req.body.products)

    const unitPrices = pluck('unitPrice', products)
    const quantityPrices = zip(quantities, unitPrices)
    const totals = map(product, quantityPrices)
    const totalUSD = sum(totals)

    const productsWithDetails = products.map((product, i) => Object.assign({}, product, { quantity: quantities[i], total: totals[i] }))

    return Order.create({
       totalUSD,
       products: productsWithDetails,
       userId: req.user.id,
     }, { raw: true })
  })
  .then(validOrder => {
    const orderObj = {
      status: 'pending',
      userId: req.user.id,
      orderId: validOrder.id,
      currency: 'BTC',
      amountUSD: validOrder.totalUSD,
    }
    const requestObj = bitapi.startPayment(req.user.accountId, 'BTC', validOrder.totalUSD)
    return Promise.all([ requestObj, orderObj ])
  })
  .then(([ newRequest, orderObj ]) => { console.log(newRequest); return Transaction.create(merge(orderObj, newRequest)) })
  .then(transaction => res.json({ transaction }))
  .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
  .catch(errors => { console.log(errors); res.status(400).json({ errors }) })
