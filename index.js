var app = require('./server/app');
var db = require('./server/db');

var dbURI= process.env.DB_URI;
var PORT = process.env.PORT || 8080;


db.open(dbURI);

app.listen( PORT, function() {
	console.log('Now running on port 8080');
})

