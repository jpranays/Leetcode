// Maximum Depth of Binary Tree
/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1
*/
var maxDepth = function (root) {
	if (!root) {
		return 0;
	}
	let queue = [root];
	let levels = 0;
	while (queue.length > 0) {
		let currentLen = queue.length;
		for (let i = 0; i < currentLen; i++) {
			let currentNode = queue.shift();
			if (currentNode) {
				if (currentNode.left) {
					queue.push(currentNode.left);
				}
				if (currentNode.right) {
					queue.push(currentNode.right);
				}
			}
		}
		levels++;
	}
	return levels;
};
