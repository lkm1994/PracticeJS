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
