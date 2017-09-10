const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const getBalance = require('./get')
const linkBank = require('./bank')
const startWithdraw = require('./withdraw')

const validateBody = require('../middleware/validate-body')
const validateParams = require('../middleware/validate-params')
const validFields = require('../middleware/valid-fields')

const validBank = validFields([ 'recipientName', 'address', 'address2', 'city', 'state', 'bankName', 'routing', 'account', 'confirmAccount', ], 'bank')

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/',
      getBalance
    )
    .post('/bank',
      validateBody(validBank),
      linkBank
    )
    .post('/withdraw',
      startWithdraw
    )
