// Power of Four
// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 5
// Output: false
var isPowerOfFour = function (n) {
	for (let i = 0; i < Math.round(Math.sqrt(n)); i++) {
		if (4 ** i == n) {
			return true;
		}
	}
	return false;
};
var isPowerOfFour = function (n) {
	//   for(let i=0;i<Math.round(Math.sqrt(n));i++){
	//   if(4**i==n){
	//       return true
	//   }
	// }
	// return false

	if (
		Math.log(n) / (2 * Math.log(2)) -
			Math.round(Math.log(n) / (2 * Math.log(2))) ==
		0
	) {
		return true;
	}
	return false;
};
