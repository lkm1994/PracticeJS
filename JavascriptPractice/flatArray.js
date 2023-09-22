let arr1 = [
  [1, 2],
  [3, 4],
  [5, [6, [90, [100]]]],
  [7, 8],
  [9, 10],
];

/* const flatArray = (arr) => {
  let outputArray = [];
  recursion(0, arr, outputArray);
  return outputArray;
};

const recursion = (index, inputArray, outputArray) => {
  if (index >= inputArray.length) {
    return;
  }
  if (Array.isArray(inputArray[index])) {
    recursion(0, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }
  recursion(index + 1, inputArray, outputArray);
};

const flatArrayReduce = (arr) => {
  const flattenArray = arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(flatArrayReduce(b));
    } else {
      return a.concat(b);
    }
  }, []);
  return flattenArray;
}; */

const flatArrayReduce = (arr) => {
  const flatArray = arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(flatArrayReduce(b));
    } else {
      return a.concat(b);
    }
  }, []);
  return flatArray;
};

const flatArray = (arr) => {
  let output = [];
  recursive(0, arr, output);
  return output;
};
const recursive = (index, input, output) => {
  if (index >= input.length) {
    return;
  }
  if (Array.isArray(input[index])) {
    recursive(0, input[index], output);
  } else {
    output.push(input[index]);
  }
  recursive(index + 1, input, output);
};
console.log(flatArray(arr1));
