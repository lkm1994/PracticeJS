let arr = [1, 1, 0, 0, 0, 1, 0];

const freePrison = () => {
  if (arr[0] === 0) {
    return 0
  }
  let a = JSON.parse(JSON.stringify(arr));
  // [0, 0, 1, 1, 1, 0, 1]
  let count = 1,
    flag = true,
    i = 1;
  while (a.length > 0) {
    a = a.slice(i, a.length);
    if (flag) {
      const findIndex = a.findIndex(x => x === 0);
      if (findIndex > -1) {
        count++;
        i = findIndex;
        flag = false;
      }
    } else {
      const findIndex = a.findIndex(x => x === 1);
      if (findIndex > -1) {
        count++;
        i = findIndex;
        flag = true;
      }
    }
  }
  return count;
}
console.log(freePrison());
// efficient solution
let arr = [1, 0, 1, 0, 1, 0, 1];

const freePrison = () => {
  if (arr[0] === 0) {
    return 0
  }
  let result = [];
  let j = 0
  for (let i = 1; i < arr.length + 1; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    } else {
      result.push(arr.slice(j, i));
      j = i;
    }
  }
  return result.length;
}
console.log(freePrison());
