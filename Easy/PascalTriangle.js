//  Pascal's Triangle
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
var generate = function (rows) {
	let pascalsArr = [];
	for (let i = 0; i < rows; i++) {
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
	return pascalsArr;
};
