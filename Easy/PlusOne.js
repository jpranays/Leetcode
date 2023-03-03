//  Plus One
// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
var plusOne = function (digits) {
	let string = "";
	for (i = 0; i < digits.length; i++) {
		string += `${digits[i]}`;
	}
	return String(BigInt(string.replace(/,/g, "")) + 1n)
		.replace(/n/g, "")
		.split("");
};
