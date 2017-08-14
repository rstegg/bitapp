const Models = require('../../models')
const { user } = Models

module.exports = (req, res) =>
  user.update(
    { verified: true },
    { where: { phone: req.body.phone, verifyCode: req.body.code, verified: false }, returning: true, raw: true }
  )
    .then(([ n, [ user ] ]) => !user ? Promise.reject('bad user') : user)
    .then(user => res.json(user))
    .catch(error => res.status(400).json({ error }))
