const router = require('express').Router()

const auth = require('./auth')
const items = require('./items')
const products = require('./products')
const images = require('./images')

module.exports =
  router
    .use('/auth', auth)
    .use('/items', items)
    .use('/products', products)
    .use('/images', images)
