'use strict'

let verifyToken = require('../utils/verifytoken')
let config      = require('../config')

let auth = function authenticate(req,res,next){
  let token = req.body.token || req.query.token
  let result = verifyToken(token, config.secret)

  if (result === false) {
      res.status(401).send('Unauthorized')
      res.end()
  }
  next()
}

module.exports = auth
