
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');


var routes = require('./routes');


var app = express();




var THREESCALE_PROVIDER_KEY=process.env.THREESCALE_PROVIDER_KEY;

//API authentication configured in 3scale to use the user_key mode
var ThreeScale = require('3scale').Client;
// keep your provider key secret
var client = new ThreeScale(THREESCALE_PROVIDER_KEY);

app.all('/api/*', function(request, response, next){
	// you will usually obtain user_key from request params
	client.authrep_with_user_key(
		{ user_key: "099970efb91529e64a35eddfcdbb4ff6" , "usage": { "hits": 1 } }, 
	function(response3S){
	  if(response3S.is_success()) {
	    next();
	  } else {
	    res.status(403).send( "not authorized " + response3S.error_message);
	  }
	});
});



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




