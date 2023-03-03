//  Pascal's Triangle II
// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]
// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?
var getRow = function (rows) {
	let pascalsArr = [];
	for (let i = 0; i < rows + 1; i++) {
		if (i == 0) {
			pascalsArr.push([1]);
		} else {
			let row = [];
			for (let j = 0; j <= i; j++) {
				if (j == 0) {
					row.push(pascalsArr[pascalsArr.length - 1][0]);
				} else if (j == i) {
					row.push(pascalsArr[pascalsArr.length - 1][j - 1]);
				} else {
					row.push(
						pascalsArr[pascalsArr.length - 1][j - 1] +
							pascalsArr[pascalsArr.length - 1][j]
					);
				}
			}
			console.log(...row);
			pascalsArr.push(row);
		}
	}
	return pascalsArr[pascalsArr.length - 1];
};
