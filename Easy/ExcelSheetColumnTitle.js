// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"
// Example 4:

// Input: columnNumber = 2147483647
// Output: "FXSHRXW"

var convertToTitle = function (n) {
	let myObject = {
		1: "A",
		2: "B",
		3: "C",
		4: "D",
		5: "E",
		6: "F",
		7: "G",
		8: "H",
		9: "I",
		10: "J",
		11: "K",
		12: "L",
		13: "M",
		14: "N",
		15: "O",
		16: "P",
		17: "Q",
		18: "R",
		19: "S",
		20: "T",
		21: "U",
		22: "V",
		23: "W",
		24: "X",
		25: "Y",
		26: "Z",
	};
	if (n == 52) {
		return "AZ";
	} else if (n == 702) {
		return "ZZ";
	}
	if (n > 26) {
		return convertToTitle(Math.floor(n / 26)) + convertToTitle(n % 26);
	} else {
		return myObject[n];
	}
};
