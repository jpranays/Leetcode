//  Longest Continuous Increasing Subsequence
// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.
// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1.

var findLengthOfLCIS = function (nums) {
	if (nums.length == 0) {
		return 0;
	}
	// let longSub=[[nums[0]]]
	// for(i=1;i<nums.length;i++){
	//     if(longSub[longSub.length-1].every(num=>num<nums[i])){
	//         longSub[longSub.length-1].push(nums[i])
	//     }else{
	//         longSub.push([nums[i]])
	//     }
	// }
	// return longSub.sort((a,b)=>b.length-a.length)[0].length
	let itr = nums[0];
	let count = 0;
	let maxCount = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > itr) {
			itr = nums[i];
			count++;
		} else {
			itr = nums[i];
			maxCount = count > maxCount ? count : maxCount;
			count = 0;
		}
	}
	if (maxCount == 0) {
		return count + 1;
	}
	return maxCount + 1;
};
