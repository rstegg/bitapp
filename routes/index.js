const router = require('express').Router()

const auth = require('./auth')
const items = require('./items')
const products = require('./products')
const images = require('./images')
const orders = require('./orders')
const transactions = require('./transactions')

module.exports =
  router
    .use('/auth', auth)
    .use('/items', items)
    .use('/products', products)
    .use('/images', images)
    .use('/orders', orders)
    .use('/transactions', transactions)
