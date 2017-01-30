var express = require('express');
var app = express();
var config = require('./config');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//setup app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('secret', config.secret);

//routes definition
let posts         = require('./routes/posts');
let admin         = require('./routes/admin');
let authenticate  = require('./routes/authenticate');
let auth          = require('./middleware/auth')

app.use(config.prefix + '/posts', posts);
app.use(config.prefix + '/admin', auth, admin);
app.use(config.prefix + '/authenticate', authenticate);

//engage!
app.listen(port, function () {
  console.log('Listening on port', port);
});
