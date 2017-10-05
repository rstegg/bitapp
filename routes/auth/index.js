const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const login = require('./login')
const signup = require('./signup')
const phone = require('./phone')
const verify = require('./verify')

const validateBody = require('../middleware/validate-body')
const validFields = require('../middleware/valid-fields')

const hashPassword = require('../middleware/hash-password')

const validField = p => obj => !isNil(path([ p ], obj))

const logger = (req, res, next) => { console.log(req); next(); }

module.exports =
  router
    .post('/phone',
      validateBody(validField('phone')),
      phone
    )
    .post('/verify',
      validateBody(validFields([ 'code', 'phone' ])),
      verify
    )
    .post('/signup',
      validateBody(validFields([ 'name', 'password' ], 'user')),
      hashPassword,
      signup
    )
    .post('/login',
      logger,
      passport.authenticate('local', { session: false }),
      login
    )
