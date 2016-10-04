
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

module.exports = app;




