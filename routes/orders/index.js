const router = require('express').Router()
const passport = require('passport')

const createOrder = require('./create')
const getAll = require('./getAll')

const validateBody = require('../middleware/validate-body')
const validField = require('../middleware/valid-field')

const validOrder = validField('products')

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/', getAll)
    .post('/',
      validateBody(validOrder),
      createOrder
    )
