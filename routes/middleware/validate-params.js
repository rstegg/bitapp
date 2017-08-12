module.exports = (validator, error = 'Invalid Body') => (req, res, next) =>
  !validator(req.params) ? res.status(400).json({ error })
    : next()
