//  Binary Tree Inorder Traversal
// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
var inorderTraversal = function (root) {
	let arr = [];
	let inorder = function (root) {
		if (root) {
			if (root.left) {
				inorder(root.left);
			}
			arr.push(root.val);
			if (root.right) {
				inorder(root.right);
			}
		}
	};
	inorder(root);
	return arr;
};
