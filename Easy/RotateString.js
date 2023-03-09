// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
var rotateString = function (A, B) {
	if (!A && !B) {
		return true;
	}

	A = [...A];
	B = [...B];

	for (let i = 0; i < A.length; i++) {
		if (A.join("") == B.join("")) {
			return true;
		}
		A.push(A.shift());
	}
	return false;
};