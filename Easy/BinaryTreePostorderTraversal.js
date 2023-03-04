//  Binary Tree Postorder Traversal
// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]
var postorderTraversal = function (root) {
	let arr = [];
	let preOrder = function (root) {
		if (root) {
			if (root.left) {
				preOrder(root.left);
			}
			if (root.right) {
				preOrder(root.right);
			}
			arr.push(root.val);
		}
	};
	preOrder(root);
	return arr;
};
