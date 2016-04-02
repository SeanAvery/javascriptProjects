var http = require('http');


http.createServer(function (request, response){
	// send http header
	response.writeHead(200, {'Content-type': 'text/plain'});
	// send response body: hello world
	response.end("hello world");

}).listen(8083);