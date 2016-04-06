// import fs module
var fs = require('fs');

// READ
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('utf-8');
console.log(readStream);
// WRITE
var writeStream = fs.createWriteStream('ouput.txt');

writeStream.write(writeStream, 'utf-8')
readStream.pipe(writeStream);