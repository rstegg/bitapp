const {
  all, apply, call, compose, eqBy,
  head, identity, intersection, keys, length,
  map, mergeWith, pick, props, useWith, values
} = require('ramda')


const jsonHandler =
  (fn) =>
    (req, res, next) =>
      fn(req.arguments)
        .then(x => res.json(x))
        .catch(next)

// returns true if both object have the same keys
const sameKeys =
   compose(
    eqBy(length),
    useWith(intersection, [keys, keys]))

// validateSpec:: Object Function -> Object Any -> Boolean
// returns true all the function in Obj1 return True
// when called with the matching entry in Obj2
const validateSpec =
  compose(
    all(identity),
    values,
    mergeWith(call))

// return the specs in order
// FIXME: it should throw an error if
const makeArguments =
  (spec, params) => {
    if(!sameKeys(spec, params)){
      throw new Error("Missing parameters")
    }

    if(!validateSpec(spec, params)){
      throw new Error(`Error in type validation for params ${JSON.stringify(params)}`)
    }

    return pick(keys(spec), params)
  }


const validateArguments =
  (spec) =>
    (req, res, next) => {
      try {
        req.arguments = makeArguments(spec, req.params)
      } catch (error) {
        next(error)
      }
      return next()
    }

module.exports = {
  jsonHandler,
  validateArguments
}
