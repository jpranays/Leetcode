//  Power of Three
// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
var isPowerOfThree = function (n) {
	for (let i = 0; i < Math.round(Math.sqrt(n)); i++) {
		if (3 ** i == n) {
			return true;
		}
	}
	return false;
};
