const Models = require('../../models')
const { user } = Models
const bitapi = require('../../services/bitapi')

const validate = req =>
  user.findOne({
    where: {
      phone: req.body.phone,
      verifyCode: req.body.code,
      verified: false
    }
  })
  .then(user =>
    !user ? Promise.reject('invalid code')
    : user
  )

const createAccount = validatedUser =>
  bitapi.createAccount()
    .then(accountId =>
      user.update(
        { accountId },
        { where: { id: validatedUser.id }, returning: true, raw: true }
      )
      .then(([ n, [ user ] ]) => !user ? Promise.reject('bad user') : user)
    )

module.exports = (req, res) =>
  validate(req)
    .then(createAccount)
    .then(user => res.json({ user }))
    .catch(error => res.status(400).json({ error }))
