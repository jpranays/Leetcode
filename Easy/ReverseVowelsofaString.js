// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
var reverseVowels = function (s) {
	let vowelsFound = s.match(/[aeiouAEIOU]/g);
	s = s.replace(/[aeiouAEIOU]/g, "_").split("");
	s = s
		.map((letter) => {
			if (letter == "_") {
				return vowelsFound.pop();
			}
			return letter;
		})
		.join("");
	return s;
};
