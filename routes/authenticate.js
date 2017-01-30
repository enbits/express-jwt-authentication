'use strict'

let express = require('express')
let router = express.Router()
let jwt = require('jsonwebtoken')
let config = require('../config')

router.post('/', (req, res) => {
  let users = [
    {
      name: 'Uma Thurman',
      email: 'uthurman@email.com',
      password: 'ut1234'
    },
    {
      name: 'John Travolta',
      email: 'jtravolta@email.com',
      password: 'jt1234'
    }
  ]

  let foundUser = false

  users.filter((user) => {
    if (user.email === req.body.email && user.password === req.body.password) {
      foundUser = user
      return
    }
  })

  if (foundUser !== false) {
    let token = jwt.sign(foundUser, config.secret, {
      expiresIn: 86400 // set expiration to 24hs
    })
    res.json({ status: 'success', 'message': 'Welcome ' + foundUser.name, token: token })
  }
  res.status(401).send('Unauthorized')
})

module.exports = router
