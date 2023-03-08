// Power of Two
// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false
var isPowerOfTwo = function (n) {
	for (let i = 0; i <= Math.round(Math.sqrt(n)) + 1; i++) {
		if (2 ** i == n) {
			return true;
		}
	}
	return false;
};
