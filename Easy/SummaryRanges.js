// Summary Ranges
// Given a sorted integer array without duplicates, return the summary of its ranges.

// Example 1:

// Input:  [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
// Example 2:

// Input:  [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

var summaryRanges = function (arr) {
	if (!arr.length) {
		return [];
	}
	let RangeArr = [[arr[0]]];
	for (i = 1; i < arr.length; i++) {
		if (RangeArr[RangeArr.length - 1].includes(arr[i] - 1)) {
			RangeArr[RangeArr.length - 1].push(arr[i]);
		} else {
			RangeArr.push([arr[i]]);
		}
	}
	RangeArr = RangeArr.map((eachArray) => {
		if (eachArray.length == 1) {
			return `${eachArray[0]}`;
		} else {
			return `${eachArray[0]}->${eachArray[eachArray.length - 1]}`;
		}
	});
	return RangeArr;
};
