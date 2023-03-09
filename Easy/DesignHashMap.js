//  Design HashMap
// Design a HashMap without using any built-in hash table libraries.

// To be specific, your design should include these functions:

// put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
// get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

// Example:

// MyHashMap hashMap = new MyHashMap();
// hashMap.put(1, 1);
// hashMap.put(2, 2);
// hashMap.get(1);            // returns 1
// hashMap.get(3);            // returns -1 (not found)
// hashMap.put(2, 1);          // update the existing value
// hashMap.get(2);            // returns 1
// hashMap.remove(2);          // remove the mapping for 2
// hashMap.get(2);            // returns -1 (not found)

// Note:

// All keys and values will be in the range of [0, 1000000].
// The number of operations will be in the range of [1, 10000].
// Please do not use the built-in HashMap library.

/**
 * Initialize your data structure here.
 */
//ES5
var MyHashMap = function () {
	this.map = [];
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
	this.map[key] = [key, value];
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
	if (this.map[key] === undefined) {
		return -1;
	}
	return this.map[key][1];
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
	this.map[key] = undefined;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

//ES6
// class myHashMapWithClass {
// 	constructor() {
// 		this.keyArr = [];
// 		this.valArr = [];
// 	}
// 	put(key, value) {
// 		if (this.keyArr.includes(key)) {
// 			this.keyArr[this.keyArr.indexOf(key)] = key;
// 			this.valArr[this.keyArr.indexOf(key)] = value;
// 		} else {
// 			this.keyArr.push(key);
// 			this.valArr.push(value);
// 		}
// 	}
// 	get(key) {
// 		if (!this.keyArr.includes(key)) {
// 			console.log(-1);
// 		} else {
// 			console.log(this.valArr[this.keyArr.indexOf(key)]);
// 		}
// 	}
// 	remove(key) {
// 		if (!this.keyArr.includes(key)) {
// 			console.log(-1);
// 		} else {
// 			this.keyArr.splice(this.keyArr.indexOf(key), 1);
// 			this.valArr.splice(this.keyArr.indexOf(key), 1);
// 		}
// 	}
// }
// let hashMapWithClass = new myHashMapWithClass();
// hashMapWithClass.put(1, 1);
// hashMapWithClass.put(2, 2);
// hashMapWithClass.get(1); // returns 1
// hashMapWithClass.get(3); // returns -1 (not found)
// hashMapWithClass.put(2, 1); // update the existing value
// hashMapWithClass.get(2); // returns 1
// hashMapWithClass.remove(2); // remove the mapping for 2
// hashMapWithClass.get(2);
