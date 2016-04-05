// create a buffer from a given array
var buf = new Buffer([10, 20, 30, 40, 50]);
console.log(buf);

var buf2 = new Buffer('simply learning about buffers', "utf-8");
console.log(buf2);

var buf3 = new Buffer(256);
var len = buf3.write("Simply Easy Learning");
console.log(len);

// console.log(buf3.toString('utf-8'));


// create a buffer array that converts to alphavet in ascii 
var buf4 = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf4[i] = i +  97;
}

console.log(buf4.toString('ascii'));
console.log(buf4.toString('ascii', 0, 5));
console.log(buf4.toString('utf-8'));
