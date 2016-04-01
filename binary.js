// simple practice problem 
//that determines of the number of one in a 
//binary expansion of a number is even or odd

function binary(num) {
	// find binary expansion of num
	binExp = (num >>> 0).toString(2)
	
	// set counter for ones
	var ones = 0;

	// console.log output formating
	console.log(num)
	console.log(binExp)

	//loop through binary expansion string and count number of ones
	for (var i = 0; i < binExp.length; i++) {
		character = binExp.charAt(i);
		if (character == '1') {
			ones++
		}
		
	}
	if (ones % 2 == 0) {
		console.log("it is even!!")
	} else if (ones % 2 == 1) {
		console.log('it is odd...')
	}
} 

binary(-3);
binary(100);
binary(5);