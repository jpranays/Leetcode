//  Ransom Note

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
var canConstruct = function (ransomNote, magazine) {
	magazine = magazine.split("");
	ransomNote = ransomNote.split("");

	return ransomNote.every((word) => {
		return (
			magazine.includes(word) &&
			count(word, ransomNote) <= count(word, magazine)
		);
	});
};
function count(target, arr) {
	return arr.filter((letter) => letter == target).length;
}
