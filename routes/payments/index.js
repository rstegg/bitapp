const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const getAllItems = require('./getAll')
const createItem = require('./create')
const updateItem = require('./update')
const deleteItem = require('./delete')

const validateBody = require('../middleware/validate-body')
const validateParams = require('../middleware/validate-params')
const validFields = require('../middleware/valid-fields')

const validItem = validFields(['name'], 'item')

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .get('/',
      getAllItems
    )
    .post('/',
      validateBody(validItem),
      createItem
    )
    .put('/:id',
      validateBody(validItem),
      updateItem
    )
    .delete('/:id',
      deleteItem
    )
