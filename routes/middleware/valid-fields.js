const { curryN, allPass, pipe, prop } = require('ramda')

const validField = require('./valid-field')

const validFields = curryN(1, (fields, p) =>
  p ? pipe(
    prop(p),
    allPass(
      fields.map(field => validField(field))
    )
  )
    :
    allPass(
      fields.map(field => validField(field))
    ))

module.exports = validFields
