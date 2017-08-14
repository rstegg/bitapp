const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const createOrder = require('./create')

const validateBody = require('../middleware/validate-body')
const validFields = require('../middleware/valid-fields')

const validOrder = validFields(['products'])

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .post('/',
      validateBody(validOrder),
      createOrder
    )
