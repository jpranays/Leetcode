//  Perfect Number
// We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

// Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
// Example:
// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14

var checkPerfectNumber = function (num) {
	let isPerfect = false;
	let sum = 0;
	for (i = 1; i < num; i++) {
		if (!(num % i) || i == 1) {
			sum += i;
		}
		if (sum == num) {
			isPerfect = true;
			break;
		}
	}
	return isPerfect;
};
