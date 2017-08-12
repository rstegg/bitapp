const Models = require('../../models')
const twilio = require('../../services/twilio')

module.exports = (req, res) =>
  Models.User.update(
    { password: req.body.password, registered: true },
    { where: { id: req.user.id, phone: req.body.phone, verified: true } }
  )
  .then(user => res.json(user))
  .catch(err => console.log(err))
