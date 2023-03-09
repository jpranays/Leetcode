// Shortest Distance to a Character
// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.
var shortestToChar = function (S, C) {
	let distanceArr = [];
	S = S.split("");
	for (i = 0; i < S.length; i++) {
		if (S[i] == C) {
			distanceArr.push(0);
		} else {
			var leftD = 0;
			var rightD = 0;
			for (j = i - 1; j >= 0; j--) {
				if (S[j] == C) {
					leftD = Math.abs(j - i);
					break;
				}
			}
			for (k = i + 1; k < S.length; k++) {
				if (S[k] == C) {
					rightD = Math.abs(k - i);
					break;
				}
			}
			if (leftD == 0) {
				distanceArr.push(rightD);
			} else if (rightD == 0) {
				distanceArr.push(leftD);
			} else if (leftD < rightD) {
				distanceArr.push(leftD);
			} else {
				distanceArr.push(rightD);
			}
		}
	}
	return distanceArr;
};
