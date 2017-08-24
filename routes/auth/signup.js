const Models = require('../../models')
const jwt = require('jsonwebtoken')
const validatePhone = require('./helpers/validatePhone')

module.exports = (req, res) =>
  validatePhone(req.body.user.phone)
  .then(phone => 
    Models.user.update(
      { name: req.body.user.name, password: req.body.user.password, registered: true },
      { where: { phone }, returning: true, raw: true }
    )
  )
  .then(([ n, [ user ] ]) => !user ? Promise.reject('bad user') : user)
  .then(user => {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    res.json({ user, token })
  })
  .catch(error => res.status(400).json({ error }))
