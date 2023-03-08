//  Reverse Linked List
// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
var reverseList = function (head) {
	let Next = null;
	let previous = null;
	let current = head;
	while (current) {
		Next = current.next;
		current.next = previous;
		previous = current;
		current = Next;
	}
	return previous;
};
