//Include our assertion library.
expect = require('chai').expect;

var Calculator = require('../lib/calculator')

//Describe, before, beforeEach, it, after, and afterEach are all globally available with Mocha.
describe('calculator', function() {

  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('can add', function() {
    var sum = calculator.add(32, 45);
    expect(sum).to.equal(77);
  });

  it('can add consecutive numbers', function() {
    var sum = calculator.add(32, 45)
    var sum = calculator.add(23);
    expect(sum).to.equal(100);
  });

  it('can subtract', function() {
    var difference = calculator.add(32, 45);
    expect(difference).to.equal(77);
  });

  it('can subtract consecutive numbers', function() {
    var difference = calculator.subtract(100, 10)
    var difference = calculator.subtract(7);
    expect(difference).to.equal(83);
  });

  it('can multiply', function() {
    var product = calculator.multiply(4, 5);
    expect(product).to.equal(20);
  });

  it('can multiply consecutive numbers', function() {
    var product = calculator.multiply(4, 5);
    var product = calculator.multiply(3);
    expect(product).to.equal(60);
  });

  //Add unit tests for divide here. Then make them pass!

});