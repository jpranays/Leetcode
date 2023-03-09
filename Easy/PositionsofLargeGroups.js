//  Positions of Large Groups
// In a string S of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

// Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

// The final answer should be in lexicographic order.

// Example 1:

// Input: "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
// Example 2:

// Input: "abc"
// Output: []
// Explanation: We have "a","b" and "c" but no large group.
// Example 3:

// Input: "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]

var largeGroupPositions = function (S) {
	//   S=S.split("")
	//   let groupArr=[[S[0]]]
	//   for(let i=1;i<S.length;i++){
	//       if(groupArr[groupArr.length-1].includes(S[i])){
	//           groupArr[groupArr.length-1].push(S[i])
	//       }else{
	//           groupArr.push([S[i]])
	//       }
	//   }
	// return groupArr.filter(arr=>{
	//       if(arr.length>=3){
	//           return true
	//       }
	//   }).sort((a,b)=>b.length-a.length).map(arr=>{
	//       return [S.indexOf(arr[0]),S.lastIndexOf(arr[0])]
	//   })
	let groupArr = [];
	for (i = 0; i < S.length; i++) {
		let arr = [i];
		let k = 0;
		for (j = i + 1; j < S.length; j++) {
			if (S[j] != S[i]) {
				arr.push(j - 1);
				i = j - 1;
				break;
			}
			k = j;
		}
		if (arr.length == 1) {
			arr.push(k);
			groupArr.push(arr);
			break;
		}
		groupArr.push(arr);
	}
	console.log(groupArr);
	return groupArr.filter((arr) => {
		if (arr.length == 2 && arr[1] - arr[0] >= 2) {
			return true;
		}
	});
};
