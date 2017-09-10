const models = require('../models')
const { user } = models

const jwt = require('jsonwebtoken')

const passport = require('passport')

const passportJWT = require('passport-jwt')
const passportLocal = require('passport-local')

module.exports = () => {

  const { ExtractJwt, Strategy: JwtStrategy } = passportJWT
  const { Strategy: LocalStrategy } = passportLocal

  const localStrategy = new LocalStrategy({
    usernameField: 'phone', passwordField: 'password'
  }, (phone, password, done) =>
    user.findOne({ where: { phone: phone } })
      .then(user =>
        !user ? done(null, false, { error: 'Incorrect username' })
        : user.validPassword(password)
            .then(valid =>
              !valid ? done(null, false, { error: 'Incorrect password' })
              : done(null, user)
            )
      )
      .catch(err => done(err))
  )

  const jwtOptions = {}
  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader()
  jwtOptions.secretOrKey = process.env.JWT_SECRET
  jwtOptions.ignoreExpiration = true

  const jwtStrategy = new JwtStrategy(jwtOptions,
    function(jwtPayload, done) {
      user.findById(jwtPayload.id)
        .then(function(user) {
          if (!user) {
            return done(null, false, { error: 'Invalid token' })
          }
          return done(null, user)
        })
        .catch(function(err) {
          return done(err)
        })
    }
  )

  passport.use(jwtStrategy)
  passport.use(localStrategy)

  return passport.initialize()
}
