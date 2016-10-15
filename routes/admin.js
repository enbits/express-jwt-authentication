var express = require('express');
var router = express.Router();
var verifyToken = require('../utils/verifytoken');
var config = require('../config');

router.post('/', function(req, res) {
  var token = req.body.token || req.query.token;
  var result = verifyToken(token, config.secret);

  if (result === false) {
      res.status(401).send('Unauthorized');
  }

  res.json({ status: 'success', message: 'Allowed access'});
});

module.exports = router;
