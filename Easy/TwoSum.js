// Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
	for (i = 0; i < nums.length; i++) {
		for (j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
};
var twoSum = function (nums, target) {
	let myMap = new Map();
	for (i = 0; i < nums.length; i++) {
		let secondNum = target - nums[i];
		if (myMap.has(secondNum)) {
			return [i, myMap.get(secondNum)];
		}
		myMap.set(nums[i], i);
	}
};
