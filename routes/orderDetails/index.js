const router = require('express').Router()
const passport = require('passport')

const getAll = require('./getAll')

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/order/:orderId', getAll)
