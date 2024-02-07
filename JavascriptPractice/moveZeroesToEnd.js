/**
   MoveZerosToEnd :
   Sort "array" so that all elements with the value of zero are moved to the
   end of the array, while the other elements maintain order.
   [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
   Zero elements also maintain order in which they occurred.
   [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
Do not use any temporary arrays or objects. Additionally, you're not able
   to use any Array or Object prototype methods such as .shift(), .push(), etc
   the correctly sorted array should be returned.
**/
let a = [0, 2, 1, 0, 3];

function moveZeroesToEnd(arr, n) {
  let count = 0; // Count of non-zero elements  

  // Traverse the array. If element encountered is non-  
  // zero, then replace the element at index 'count'  
  // with this element  
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    } // here count is  
  }
  console.log(arr)
  // incremented  

  // Now all non-zero elements have been shifted to  
  // front and 'count' is set as index of first 0.  
  // Make all elements 0 from count to end.  
  while (count < n) {
    arr[count++] = 0;
  }
  return arr;
}


console.log(moveZeroesToEnd(a, a.length))
