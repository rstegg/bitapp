const Models = require('../../models')
const twilio = require('../../services/twilio')
const { length } = require('ramda')

const validatePhone = p =>
  new Promise((resolve, reject) => {
    const phone = p.trim().replace(/^\D+/g, '').replace(/ /g,'')
    if(phone.startsWith('1')) {
      if(length(phone) === 11) {
        resolve('+' + phone)
      }
      reject('bad number')
    }
    if(length(phone) === 10) {
      resolve('+1' + phone)
    }
    reject('bad number')
  })



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
    .catch(error => res.status(400).json({error}))
