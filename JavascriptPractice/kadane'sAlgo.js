function kadanesAlgorithm(array) {
  // Write your code here.
  let maxSum = array[0],
    currentSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(currentSum + array[i], array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
);
