let a = [0, 2, 1, 0, 3];
function moveZeroesToEnd(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < n) {
    arr[count++] = 0;
  }
  return arr;
}


console.log(moveZeroesToEnd(a, a.length))

//two pointer solutions
var moveZeroes = function(nums) {
    let j = 0, temp;
  for(let i = 0; i<nums.length; i++) {
  	if(nums[i] !== 0 && nums[j] === 0) {
    	let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp
    }
    if(nums[j] !== 0) {
    	j++;
    }
  }
  return nums;
};
console.log(moveZeroes(a))
