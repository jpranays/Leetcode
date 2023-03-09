//  Valid Perfect Square
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false
var isPerfectSquare = function (num) {
	// for(let i=1;i<=Math.round(num/2);i++){
	//     if(i**2==num || num==1){
	//         return true
	//     }
	// }
	//  return false
	for (let i = 0; i <= num; i++) {
		if (i * i === num) {
			return true;
		}
	}
	return false;
};
