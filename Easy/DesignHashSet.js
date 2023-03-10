//  Design HashSet
// Design a HashSet without using any built-in hash table libraries.

// To be specific, your design should include these functions:

// add(value): Insert a value into the HashSet.
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

// Example:

// MyHashSet hashSet = new MyHashSet();
// hashSet.add(1);
// hashSet.add(2);
// hashSet.contains(1);    // returns true
// hashSet.contains(3);    // returns false (not found)
// hashSet.add(2);
// hashSet.contains(2);    // returns true
// hashSet.remove(2);
// hashSet.contains(2);    // returns false (already removed)
/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
	this.obj = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
	if (!this.obj[key]) {
		this.obj[key] = key;
	}
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
	if (this.obj[key]) {
		delete this.obj[key];
	}
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
	return this.obj.hasOwnProperty(key) ? true : false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
