const str1 = "racecar";
const getSubStrings = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    checkPallindrome(i, i, result, str);
    checkPallindrome(i, i + 1, result, str);
  }
  return result;
};
const checkPallindrome = (left, right, result, str) => {
  while(left >=0 && right < str.length && str[left] === str[right]) {
    result.push(str.substring(left, right + 1))
    left--;
    right++
  }
}
const data = getSubStrings(str1);
console.log(data);
