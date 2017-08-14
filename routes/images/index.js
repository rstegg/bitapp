const router = require('express').Router()
const passport = require('passport')
const { path, isNil } = require('ramda')

const upload = require('./upload')
const success = require('./success')
const updateImage = require('./update')
const remove = require('./delete')

module.exports =
  router
    .use(passport.authenticate('jwt', { session: false }))
    .post('/',
      upload.single('image'),
      success
    )
    .post('/:itemid',
      upload.single('image'),
      updateItemImage
    )
    .delete('/:itemid',
      remove
    )
