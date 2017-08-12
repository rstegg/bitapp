const Models = require('../../models')
const { User } = Models

module.exports = (req, res) =>
  User.update(
    { verified: true },
    { where: { phone: req.body.phone, verifyCode: req.body.code, verified: false }}
  )
  .then(user => res.json(user))
  .catch(err => console.log(err))
