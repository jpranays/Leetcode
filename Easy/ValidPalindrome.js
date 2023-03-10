// Valid Palindrome
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
var isPalindrome = function (s) {
	s = s
		.replace(/\s/g, "")
		.split(/[ .,\/#!$?%\][@'^&\*;:"{}=\-_`~()]/)
		.join("")
		.toLowerCase();
	console.log(s);
	console.log(s.split("").reverse().join(""));

	return s == s.split("").reverse().join("");
};
