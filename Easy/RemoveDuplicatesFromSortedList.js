//  Remove Duplicates from Sorted List
// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3
var deleteDuplicates = function (head) {
	let OriginalLLArray = [];
	let current = head;
	while (current) {
		OriginalLLArray.push(current.val);
		current = current.next;
	}
	let uniqueLLArray = [...new Set(OriginalLLArray)];
	let listHead = new ListNode();
	let cur = listHead;
	for (let i = 0; i < uniqueLLArray.length; i++) {
		cur.next = new ListNode(uniqueLLArray[i]);
		cur = cur.next;
	}
	return listHead.next;
};
