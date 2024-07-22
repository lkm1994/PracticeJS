var maxVowels = function(s, k) {
  if (s.length < k) {
    return 0
  }
  let left = 0;
  let vowelsCount = 0;
  let count = 0;
  for (let right = 0; right < s.length; right++) {
    debugger;
    if (s[right] === 'a' || s[right] === 'e' || s[right] === 'i' || s[right] === 'o' || s[right] === 'u') {
      count = count + 1
    }
    let newRight = k % 2 === 0 ? right + 1 : right
    let newLeft = k % 2 === 0 ? left : left + 1
    if (right - left + 1 === k) {
      vowelsCount = Math.max(vowelsCount, count);
      if (s[left] === 'a' || s[left] === 'e' || s[left] === 'i' || s[left] === 'o' || s[left] === 'u') {
      count = count - 1
    }
      //count = 0;
      left++
    }
  }
  return vowelsCount
};

console.log(maxVowels('pdzndkhhoujpqyex', 5))
