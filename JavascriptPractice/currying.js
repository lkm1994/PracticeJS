const sum  = function (a) {
    return function (b) {
      if (b) {
        return sum(a+b); // it takes an argument and return a function which again can take an argument.
      }
      return a; // it will keep on adding 1+2+3+4..
    }
  };

  console.log(sum(1)(2)(3)())