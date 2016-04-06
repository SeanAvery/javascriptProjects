var fs = require('fs');

// asyncronous way to read file
fs.readFile('input.txt', function(err, data){
	if (err) {
		console.log(err);
	}
	console.log(data.toString());
});

// syncronous way to read file
var file = fs.readFileSync('input.txt');
console.log("syncrounous output: " + file.toString());


// open a file in local file structure 
fs.open('input.txt', 'r+', function(err, data){
	if(err) {
		return console.log(err);
	}
});

// get file information with fs.stat
fs.stat('input.txt', function(err, data){
	if (err) {
		return console.log(err);
	}
	console.log(data);
	console.log("File: " + data.isFile());
	console.log("Directory: " + data.isDirectory());
});

// write a file with some text
fs.writeFile('message.txt', 'hellloooo world', function(err, data){
	if (err) {
		return console.log(err);
	}
});

fs.readFile('message.txt', function(err, data){
	if (err) {
		return console.log(err);
	}
	console.log(data.toString());
});

// close a file

// fs.close('input.txt', 'r+', function(err, data){
// 	if (err) {
// 		return console.log(err);
// });
// 	}
// 	console.log("input.txt is closed");

// get file name
console.log(__filename);
// get directory name
console.log(__dirname);














