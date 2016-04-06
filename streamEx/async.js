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