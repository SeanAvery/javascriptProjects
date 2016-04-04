var fs = require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

fs.writeFile('message.txt', 'hello world', function(err){
	if (err) throw err;
	console.log("file should be saved")
});