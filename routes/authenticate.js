var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');

router.post('/', (req, res) => {
  var users = [
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
  ];

  var foundUser = false;

  users.filter((user) => {
    if (user.email === req.body.email && user.password === req.body.password) {
      foundUser = user;
      return;
    }
  });

  if (foundUser !== false) {
    var token = jwt.sign(foundUser, config.secret, {
      expiresIn: 86400 // set expiration to 24hs
    });
    res.json({ status: 'success', 'message': 'Welcome ' + foundUser.name, token: token })
  }

  res.send(401, 'Unauthorized');
});

module.exports = router;
