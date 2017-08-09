const Models = require('../../models')
const twilio = require('../../services/twilio')

const shortId = require('shortid')

module.exports = (req, res) =>
  Models.User.update(
    { verified: true },
    { where: { phone: req.body.phone, verifyCode: req.body.code, verified: false }}
  )
  .then(user => res.json(user))
  .catch(err => console.log(err))
