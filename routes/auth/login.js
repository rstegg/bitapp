const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  const payload = { id: req.user.id }
  const token = jwt.sign(payload, process.env.JWT_SECRET)
  return res.json({ user: req.user, token: token })
}
