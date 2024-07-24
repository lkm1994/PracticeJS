var isSubsequence = function(s, t) {
    let seq = 0;
    for(let i = 0; i<t.length;i++) {
    	if(s[seq] === t[i]) {
      	seq++;
      }
    }
    return seq === s.length;
};
console.log(isSubsequence("abc", "ahbgdc"));
