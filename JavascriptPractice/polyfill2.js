let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myMap = function (callback) {
  let a = [];
  for (let i = 0; i < this.length; i++) {
    a.push(callback(this[i], i, this));
  }
  return a;
};

//console.log(arr.myMap((x) => x));

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback.call(this, this[i], i, this);
  }
};

//arr.myForEach((x) => console.log(x));

Array.prototype.myFilter = function (callback) {
  let a = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      a.push(this[i]);
    }
  }
  return a;
};

//console.log(arr.myFilter((x) => x > 4));

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(this, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

console.log(
  arr.myReduce((a, b) => {
    return a + b;
  }, 0)
);
