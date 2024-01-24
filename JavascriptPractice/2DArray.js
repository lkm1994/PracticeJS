function generateMatrix(row, column) {
  let revert = false;
  let result = [];
  let count = 1;
  for (let i = 0; i < column; i++) {
    result.push([])
  }
  for (let i = column - 1; i >= 0; i--) {
    if (!revert) {
      for (let j = 0; j < row; j++) {
        result[j][i] = count++;
        if (row - 1 === j) {
          revert = true;
        }
      }
    } else {
      for (let j = row - 1; j >= 0; j--) {
        result[j][i] = count++;
        if (j === 0) {
          revert = false;
        }
      }
    }
  }
  return result
}

console.log(generateMatrix(3, 3))
