var express = require('express');

var app = express();

// import body parser 
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

app.get('/index.html', function(res, req){
	res.sendFile(__dirname + "/index.html");
});

app.post('/process_post', urlencodedParser, function(req, res) {
	response = {
		firstName : req.body.first_name, 
		lastName : req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen('3001');

