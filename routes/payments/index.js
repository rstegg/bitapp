const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const createPayment = require('./create')
const getPayments = require('./getAll')

const validateBody = require('../middleware/validate-body')
const validateParams = require('../middleware/validate-params')
const validFields = require('../middleware/valid-fields')

const validItem = validFields([ 'orderId', 'currency' ])

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/',
      getPayments
    )
    .post('/',
      validateBody(validItem),
      createPayment
    )
