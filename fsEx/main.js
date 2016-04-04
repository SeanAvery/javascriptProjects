var fs = require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

// fs.writeFile('message.txt', 'hello world', function(err){
// 	if (err) throw err;
// 	console.log("file should be saved")
// });

fs.readFile('message.txt', function(err, data) {
	if (err) {
		console.log("hitting an error");
		return;
	}
	console.log(data.toString());
});