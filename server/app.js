
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes');
var compression = require('compression');

var app = express();

// for HTML rendering
app.use(express.static(path.join( __dirname, '../client')));
app.use(compression());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// support json encoded bodies
app.use(bodyParser.json() ); 

// route paths
app.use('/',routes);


//API authentication configured in 3scale to use the user_key mode
var Client = require('3scale').Client;

client = new Client("your provider key");

client.authrep_with_user_key({ "user_key": "your key", "usage": { "hits": 1 } }, function(response){
  console.log(response);
});


module.exports = app;
module.exports = Client;



