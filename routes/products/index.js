const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const getAllProducts = require('./getAll')
const createProduct = require('./create')
const updateProduct = require('./update')
const deleteProduct = require('./delete')
const getByCode = require('./getByCode')
const validateBody = require('../middleware/validate-body')
const validateParams = require('../middleware/validate-params')
const validFields = require('../middleware/valid-fields')

const validProduct = validFields([ 'name' ], 'item')


module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/',
      getAllProducts
    )
    .get('/search/code/:code',
      getByCode
    )
    .post('/',
      validateBody(validProduct),
      createProduct
    )
    .put('/:id',
      validateBody(validProduct),
      updateProduct
    )
    .delete('/:id',
      deleteProduct
    )
