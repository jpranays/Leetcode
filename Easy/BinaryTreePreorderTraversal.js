//  Binary Tree Preorder Traversal
// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]
var preorderTraversal = function (root) {
	let arr = [];
	let preOrder = function (root) {
		if (root) {
			arr.push(root.val);
			if (root.left) {
				preOrder(root.left);
			}
			if (root.right) {
				preOrder(root.right);
			}
		}
	};
	preOrder(root);
	return arr;
};
