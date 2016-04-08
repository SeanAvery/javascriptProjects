// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
// 	res.send('hello world');
// });

// app.listen(3000);

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello worldddddd');
});

var server = app.listen('3000', function(req, res) {

	var host = server.address().address;
	var port = server.address().port;
	console.log(host);
	console.log(port);
	console.log("http" + host + port);
});

