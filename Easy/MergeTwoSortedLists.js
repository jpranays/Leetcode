// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
var mergeTwoLists = function (l1, l2) {
	let head = new ListNode();
	let current = head;
	while (l1 || l2) {
		if (l1) {
			let newNode = new ListNode(l1.val);
			current.next = newNode;
			current = current.next;
			l1 = l1.next;
		}
		if (l2) {
			let newNode = new ListNode(l2.val);
			current.next = newNode;
			current = current.next;
			l2 = l2.next;
		}
	}
	current = head.next;

	for (; current; current = current.next) {
		for (Next = current.next; Next; Next = Next.next) {
			if (current.val > Next.val) {
				let temp = current.val;
				current.val = Next.val;
				Next.val.temp;
			}
		}
	}
	return head.next;

	// Recursive solution
	//  if (l1 == null) {
	//     return l2
	// } else if (l2 == null) {
	//     return l1
	// }
	// if (l1.val > l2.val) {
	//     [l1, l2] = [l2, l1] // Swap in place
	// }
	// l1.next = mergeTwoLists(l1.next, l2)
	// return l1 || l2
};
