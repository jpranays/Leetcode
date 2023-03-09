// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:

// 0 <= n <= 105

// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?
var countBits = function (num) {
	//  let myArr=[0]
	// for(let i=1;i<=num;i++){
	//     let str=(i).toString(2).match(/1/g)
	//     myArr.push(str ? str.length : 0 )
	// }
	// return myArr
	let myArr = new Array(num + 1);
	myArr = myArr.map((_, index) => {
		console.log((index - 1).toString(2));
		return (index - 1).toString(2).match(/1/g)
			? (index - 1).toString(2).match(/1/g).length
			: 0;
	});
	return myArr;
};
