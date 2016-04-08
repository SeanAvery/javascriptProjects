// express server for webpage 

var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('this is a get reqest');

});

app.post('/', function(req, res) {
	res.send('this is a post request')
});

app.get('/profile', function(req, res) {
	res.send('this is my profile');
})

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log(host);
	console.log(port);
});
