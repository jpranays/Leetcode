/*
Word Pattern
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", s = "dog dog dog dog"
Output: false
*/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	if (pattern == s && (pattern.length != 1 || s.length != 1)) {
		return false;
	} else if (pattern.split("").length != s.split(" ").length) {
		return false;
	}
	let map = new Map();
	s = s.split(" ");
	let set = new Set();
	for (let i = 0; i < s.length; i++) {
		if (map.has(pattern[i]) && map.get(pattern[i]) != s[i]) {
			return false;
		} else {
			set.add(s[i]);
			map.set(pattern[i], s[i]);
		}
	}
	if ([...map.keys()].length != set.size) {
		return false;
	}
	return true;
};
