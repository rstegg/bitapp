const Models = require('../../models')
const { user } = Models
const validatePhone = require('./helpers/validatePhone')
const bitapi = require('../../services/bitapi')

const validate = req =>
  validatePhone(req.body.phone)
  .then(phone =>
    user.findOne({
      where: {
        phone,
        verifyCode: req.body.code,
        verified: false
      }
    })
  )
  .then(user =>
    !user ? Promise.reject('invalid code')
    : user
  )

const createAccount = ({ id }) =>
  bitapi.createAccount()
    .then(accountId =>
      user.update(
        { accountId, verified: true },
        { where: { id, verified: false }, returning: true, raw: true }
      )
      .then(([ n, [ user ] ]) => !user ? Promise.reject('bad user') : user)
    )

module.exports = (req, res) =>
  validate(req)
    .then(createAccount)
    .then(user => res.json({ user }))
    .catch(error => res.status(400).json({ error }))
