
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
var ThreeScale = require('3scale').Client;
// keep your provider key secret
var client = new ThreeScale("c754f1b79120bd23a36d9fb9b124859b");

// you will usually obtain user_key from request params
client.authrep_with_user_key({ user_key: "099970efb91529e64a35eddfcdbb4ff6" }, function(response){
  if(response.is_success()) {
    // continue
  } else {
    throw new Error("not authorized " + response.error_message);
  }
});


module.exports = app;
module.exports = client;



