const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const login = require('./login')
const signup = require('./signup')
const phone = require('./phone')
const verify = require('./verify')

const validateBody = require('../middleware/validate-body')
const validFields = require('../middleware/valid-fields')

const validField = p => obj => !isNil(path([ p ], obj))

module.exports =
  router
    .post('/phone',
      validateBody(validField('phone')),
      phone
    )
    .post('/verify',
      validateBody(validFields(['code', 'phone'])),
      verify
    )
    .post('/signup',
      validateBody(validFields(['name', 'password'], 'user')),
      signup
    )
    .post('/login',
      passport.authenticate('local', { session: false }),
      login
    )
