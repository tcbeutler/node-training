module.exports = (function() {
  var c = 0;
  return {
    add: function(a, b)  {
      if (b === undefined) {
        b = c;
      }
      return c = a + b;
    },
    subtract: function(a, b)  {
      if (b === undefined) {
        return c = c - a;
      }
      return c = a - b;
    },
    multiply: function(a, b)  {
      if (b === undefined) {
        b = c;
      }
      return c = a * b;
    },
    divide: function(a, b)  {
      if (b === undefined) {
        return c = c / a;
      }
      return c = a / b;
    }
  }
});