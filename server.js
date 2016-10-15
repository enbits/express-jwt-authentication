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
var posts = require('./routes/posts');
var admin = require('./routes/admin');
var authenticate = require('./routes/authenticate');

app.use(config.prefix + '/posts', posts);
app.use(config.prefix + '/admin', admin);
app.use(config.prefix + '/authenticate', authenticate);

//engage!
app.listen(port, function () {
  console.log('Listening on port', port);
});
