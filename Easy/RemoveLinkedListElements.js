//  Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
var removeElements = function (head, val) {
	let newHead = new ListNode();
	let current = newHead;
	while (head) {
		if (head.val != val) {
			current.next = new ListNode(head.val);
			current = current.next;
		}
		head = head.next;
	}
	return newHead.next;
};
