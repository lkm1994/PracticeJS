//map polyfill
let arr = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.myMap = function (callback) {
  let a = [];
  for (var i = 0; i < this.length; i++) {
    a.push(callback(this[i], i, this));
  }
  return a;
};

console.log(arr.myMap((x) => x));

//reduce polyfill

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

console.log(
  arr.reduce((a, b) => {
    return a + b;
  }, 0)
);

//filter polyfill

Array.prototype.myFilter = function (callback) {
  let a = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      a.push(this[i]);
    }
  }
  return a;
};

console.log(arr.myFilter((x) => x === 1));

Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback.call(this, this[i], i, this);
  }
};

arr.myForEach(x => console.log(x));

//Debounce

const debounce = (callback, delay) => {
  let timerId;

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      callback(...args);
      timerId = null; // Reset the timerId after executing the callback
    }, delay);
  };
};
// throttling 
const throttle = (callback, delay) => {
  let lastExecutionTime = 0;
  let timeoutId;

  return (...args) => {
    const currentTime = Date.now();

    if (!lastExecutionTime || currentTime - lastExecutionTime >= delay) {
      // If no recent execution or enough time has passed, execute the callback
      lastExecutionTime = currentTime;
      callback(...args);
    } else {
      // Otherwise, schedule the callback to be executed after the delay
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          lastExecutionTime = currentTime;
          callback(...args);
          clearTimeout(timeoutId);
          timeoutId = null;
        }, delay - (currentTime - lastExecutionTime));
      }
    }
  };
};

//closure example

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
