const a = [2, 1, 0, 1, 2, 0, 0, 2, 2, 0];

const sortArray = (arr) => {
	let low = 0, mid = 0, high = arr.length - 1;
  while(mid <= high) {
  	if(arr[mid] === 0) {
			const temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++
    } else if(arr[mid] === 1) {
    	mid++;
    } else {
    	const temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high--;
    }
  }
  return arr
}

console.log(sortArray(a));
