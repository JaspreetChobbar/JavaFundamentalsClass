var numbers = []
var index = 0;

console.log("Total sum is :- "+jaspreetAdd()); // we got sum  invoking function

// just extra thing not required in question
console.log("Total numbers of length to get our total sum:- "+numbers.length);

function jaspreetAdd() {
  
  var sum = 0;
  var i = 1000; // starting from i

  // ending at 10
	for (i; i >= 10; ) { // we are not decrementing here, because we have added post decrement below 
		numbers[index++] = i;
  		sum += i; // adding here to previous result
        i -= 50; // stepping 50
	}

	return sum; // returning the sum

}