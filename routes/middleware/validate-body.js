module.exports = (validator, error = "Invalid Body") => (req, res, next) => {
   if (!validator(req.body)) return res.status(400).json({error})

   return next()
}
