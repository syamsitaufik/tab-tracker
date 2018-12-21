const {User} = require('../models') // take only User.js
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // register
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      // email already exists
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  // login
  async login (req, res) {
    try {
      const {email, password} = req.body // grab email and password from req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      // find user name either in db or not
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      // const isPasswordValid = password === user.password
      // check password matching or not
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      // email already exists
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
