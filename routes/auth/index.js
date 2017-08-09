const login = require('./login')
const signup = require('./signup')
const phone = require('./phone')
const verify = require('./verify')

const validateBody = require('../middleware/validate-body')

const { prop } = require('ramda')

module.exports =
  router
    .post('/login', passport.authenticate('local', { session: false }), login)
    .post('/phone', validateBody(prop('phone')), phone)
    .post('/verify', validateBody(prop('code')), verify)
    .post('/signup', validateBody(prop('password')), signup)
