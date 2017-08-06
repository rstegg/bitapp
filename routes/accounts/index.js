const create = require('./create')

module.exports = {
  newAccount : (req, res, next) => {
    create()
    .then(x => res.json(x))
    .catch(next)
  }
}
