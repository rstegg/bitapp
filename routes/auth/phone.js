const Models = require('../../models')
const twilio = require('../../services/twilio')
const validatePhone = require('./helpers/validatePhone')

module.exports = (req, res) =>
  validatePhone(req.body.phone)
    .then(phone =>
      Models.user.create({ phone, verifyCode: Math.floor(1000 + Math.random() * 9000) })
    )
    .then(user => {
      twilio.messages.create({
        body: `Your code is: ${user.verifyCode}`,
        to: user.phone,  // Text this number
        from: process.env.TWILIO_NUMBER // From a valid Twilio number
      })
      return res.json({ phone: user.phone })
    })
    .catch(error => res.status(400).json({ error }))
