const {path} = require('ramda')
module.exports = (prop) => (req, res, next) => {console.log(path(prop, req)); next()},
