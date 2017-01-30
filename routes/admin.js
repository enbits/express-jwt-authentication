'use strict'

let express = require('express')
let router = express.Router()
let config = require('../config')

router.post('/', function(req, res) {
  res.json({ status: 'success', message: 'Allowed access'})
})

module.exports = router
