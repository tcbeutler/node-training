var square = require('./square');

module.exports = (function() {
  var m = 0;
  return {
    add: function(a, b)  {
      if (b === undefined) {
        b = m;
      }
      return m = a + b;
    },
    subtract: function(a, b)  {
      if (b === undefined) {
        return m = m - a;
      }
      return m = a - b;
    },
    multiply: function(a, b)  {
      if (b === undefined) {
        b = m;
      }
      return m = a * b;
    },
    divide: function(a, b)  {
      if (b === undefined) {
        return m = m / a;
      }
      return m = a / b;
    },
    square: function(n) {
      if (n === undefined) {
        return m = square(m);
      }
      return m = square(n);
    }
  }
});