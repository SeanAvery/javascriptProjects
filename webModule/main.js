// import fs, http, and url
var fs = require('fs');
var http = require('http');
var url = require('url');

// create http server
// var server = http.createServer(function(request, response){
// 	// parse the request to get filename
// 	// var path = url.parse(request.url).pathname;
// 	var file = __dirname + '/index.html';
// 	console.log(path + "hello");

// 	// read the content from file
// 	fs.ReadFile(file.substr(1), function(err, data){
// 		if(err) {
// 			console.log(err);
// 			response.writeHead('404', {'Content-Type': 'text/html'});
// 		}
// 		else {
// 			response.writeHead('200', {'Content-Type': 'text/html'});
// 			response.write(data.toString());
// 		}
// 		response.end();
// 	});
// }).listen(8084);

var index = fs.readFile('index.html', function(err){
	if (err) {
		return console.log(err);
	}
});

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(index);
}).listen(8087);
