//  Keyboard Row
// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Image Address
// https://assets.leetcode.com/uploads/2018/10/12/keyboard.png

// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
var findWords = function (words) {
	const keys = {
		q: 0,
		w: 0,
		e: 0,
		r: 0,
		t: 0,
		y: 0,
		u: 0,
		i: 0,
		o: 0,
		p: 0,
		a: 1,
		s: 1,
		d: 1,
		f: 1,
		g: 1,
		h: 1,
		j: 1,
		k: 1,
		l: 1,
		z: 2,
		x: 2,
		c: 2,
		v: 2,
		b: 2,
		n: 2,
		m: 2,
	};
	let answer = [];
	for (word of words) {
		flag = 0;
		let original = word;
		if (word != word.toLowerCase()) {
			flag = 1;
			word = word.toLowerCase();
		}
		let row = keys[word[0]];
		if (word.split("").every((char) => keys[char] == row)) {
			if (flag) {
				word = word[0].toUpperCase() + word.substring(1);
			}
			answer.push(original);
		}
	}
	return answer;
};
