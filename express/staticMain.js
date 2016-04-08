var express = require('express');

var app = express();

// this is to serve static files (images ect...)
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('hello world');
});

app.get('/index.html', function(reg, res) {
	res.sendFile(__dirname, + '/' + 'index.html');
});

var server = app.listen('3000', function() {
	var host = server.address().address;
	var port = server.address().address;
});




