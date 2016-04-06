// import fs module
var fs = require('fs');
var zlib = require('zlib');

// this compresses input.txt -> input.txt.gz
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));

// decompress the file
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input2.txt'));
