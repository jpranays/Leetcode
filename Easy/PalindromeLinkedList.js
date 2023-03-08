//  Palindrome Linked List
// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
var isPalindrome = function (head) {
	// let string=""
	// while(head){
	//     if(head.val<0){
	//     string+=`${Math.abs(head.val)}-`
	//     }else{
	//     string+=head.val
	//     }
	//     head=head.next
	// }
	// return string==string.split("").reverse().join("")
	// let reversedHead=reverse(head)
	// while(head && reversedHead){
	//     if(head.val!=reversedHead.val){
	//         return false
	//     }
	//     head=head.next
	//     reversedHead=reversedHead.next
	// }
	// return true
	if (!head) {
		return true;
	}
	let current = head;
	const arr = [current.val];

	while (current.next) {
		current = current.next;
		arr.push(current.val);
	}
	let low = 0;
	let high = arr.length - 1;
	while (low < high) {
		if (arr[low] === arr[high]) {
			low++;
			high--;
		} else {
			return false;
		}
	}
	return true;
};
function reverse(head) {
	let current = head;
	let Next = null;
	let previous = null;
	while (current) {
		Next = current.next;
		current.next = previous;
		previous = current;
		current = Next;
	}
	return previous;
}
