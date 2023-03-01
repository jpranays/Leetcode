// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
	let str = "";
	let tempStr = "";
	let flag = 0;
	for (let i = 0; i < strs[0].length; i++) {
		tempStr = strs[0][i];
		let count = 0;
		for (let j = 0; j < strs.length; j++) {
			if (strs[j].startsWith(str + tempStr)) {
				count++;
			} else {
				count = 0;
				flag = 1;
				break;
			}
		}
		if (count == strs.length) {
			str += tempStr;
			count = 0;
		}
		if (flag) {
			break;
		}
	}
	return str;
};
