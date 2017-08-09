const Models = require('../../models')
const twilio = require('../../services/twilio')

const shortId = require('shortid')

module.exports = (req, res) =>
  Models.User.create({ phone: req.body.phone, verifyCode: shortId.generate() })
    .then(user =>
      twilio.messages.create({
        body: 'Hello from Node',
        to: '+19519922715',  // Text this number
        from: '+19092459291' // From a valid Twilio number
      })
    )
    .catch(err => console.log(err))
