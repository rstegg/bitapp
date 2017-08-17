const accounts = require('./accounts')
const router = require('express').Router()

module.exports =
  router
    .use('/accounts', accounts)
