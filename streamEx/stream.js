// import fs module
var fs = require("fs");
// initialize data variable
var data = '';
// create Read stream
var readStream = fs.createReadStream('input.txt');

// set encoded to utf-8

readStream.setEncoding('utf-8');
console.log(readStream);

// handle stream events
readStream.on('data', function(chunk){
	data += chunk;
});

readStream.on('end', function(){
	console.log(data);
});

readStream.on('error', function(){
	console.log(err.stack);
});

//writing to a stream
var data2 = 'this info should go to output.txt';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data2, 'utf-8');

writeStream.end();

writeStream.on('finish', function() {
	console.log("writing complete");
});

writeStream.on('error', function(err) {
	console.log(err.stack);
});

