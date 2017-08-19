const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const startWithdraw = require('./withdraw')
const getBalance = require('./get')

const validateBody = require('../middleware/validate-body')
const validateParams = require('../middleware/validate-params')
const validFields = require('../middleware/valid-fields')

const validItem = validFields([ 'orderId', 'currency' ])

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/',
      getBalance
    )
    .post('/withdraw',
      startWithdraw
    )
