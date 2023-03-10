// First Unique Character in a String
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.

// var firstUniqChar = function(s) {
//     s=s.split("")
//     for(i=0;i<s.length;i++){
//         let flag=true
//         for(j=0;j<s.length;j++){
//             if(i!=j){
//             if(s[i]==s[j]){
//                 flag=false
//                 break
//             }
//             }
//         }
//         if(flag){
//             return i
//         }

//     }
//     return -1
// };
var firstUniqChar = function (s) {
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
			return i;
		}
	}

	return -1;
};
