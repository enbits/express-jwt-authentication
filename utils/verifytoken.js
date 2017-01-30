let jwt = require('jsonwebtoken')

let verifyToken = function(token, secret) {
  try {
    return decoded = jwt.verify(token, secret)
  } catch(err) {
    return false
  }
}

module.exports = verifyToken
