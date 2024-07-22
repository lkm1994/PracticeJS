var findMaxAverage = function(nums, k) {
  let maxAverage = -Infinity;
  let left = 0;
  let sum = 0;
  debugger;
  for (let right = 0; right < nums.length; right++) {
    sum = sum + nums[right];
    if (right - left + 1 === k) {
      maxAverage = Math.max(maxAverage, sum / k)
      sum = sum - nums[left];
      left++
    }
  }
  return maxAverage;
};
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
