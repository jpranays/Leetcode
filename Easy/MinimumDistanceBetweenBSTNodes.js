// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Example 1:

// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:

// Input: root = [1,0,48,null,null,12,49]
// Output: 1
var minDiffInBST = function (root) {
	let minDiff = Number.MAX_VALUE;
	let arr = [];
	let inOrder = function (head) {
		if (head) {
			if (head.left) {
				inOrder(head.left);
			}
			if (head.right) {
				inOrder(head.right);
			}
			arr.push(head.val);
		}
	};
	inOrder(root);
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (Math.abs(arr[i] - arr[j]) < minDiff) {
				minDiff = Math.abs(arr[i] - arr[j]);
			}
		}
	}
	return minDiff;
};
