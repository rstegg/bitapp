const Models = require('../../models')
const twilio = require('../../services/twilio')
const validatePhone = require('./helpers/validatePhone')

const { pipe, prop, head } = require('ramda')

const createError = error => {
  const errorMsg =
    pipe(
      prop('errors'),
      head,
      prop('message')
    )(error)

  if(errorMsg) {
    if(errorMsg === 'phone must be unique') {
      return 'Phone number already registered.'
    }
    return 'Something went wrong.'
  }
  return 'Something went wrong.'
}

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
    .catch(error => res.status(400).json({ error: createError(error) }))
