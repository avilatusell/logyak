var app = require('./server/app');
var db = require('./server/db');

var dbURI= process.env.DB_URI;
var PORT = process.env.PORT || 8080;

db.open(dbURI);

app.listen( PORT, function() {
	console.log('Now running on port 8080');
})


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



