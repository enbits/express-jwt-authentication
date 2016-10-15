var jwt = require('jsonwebtoken');

var verifyToken = function(token, secret) {
  try {
    return decoded = jwt.verify(token, secret);
  } catch(err) {
    return false;
  }
}

module.exports = verifyToken;
