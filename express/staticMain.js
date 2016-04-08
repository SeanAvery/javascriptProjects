var express = require('express');

var app = express();

// this is to serve static files (images ect...)
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('hello world');
});

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname, + '/' + 'index.html');
});

app.get('/process_get', function(req, res){
	// prepare resonse in Json format
	var response = {
		firstname : req.query.firstName,
		lastname : req.query.lastName

	};
	console.log(response);
})
var server = app.listen('3000', function() {
	var host = server.address().address;
	var port = server.address().address;
});






