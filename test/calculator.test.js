//Include our assertion library.
chai = require('chai');
expect = chai.expect;
sinon = require('sinon')
chai.use(require('sinon-chai')); //chai module plugin.
proxyquire = require('proxyquire');

//Describe, before, beforeEach, it, after, and afterEach are all globally available with Mocha.
describe('calculator', function() {

  var calculator, mockSquareModule;

  beforeEach(function() {
    mockSquareModule = null; //use sinon here to create a stub that returns a static value
    var Calculator = require('../lib/calculator');
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

  it('can divide', function() {
    var quotient = calculator.divide(70, 5);
    expect(quotient).to.equal(14);
  });

  it('can divide consecutive numbers', function() {
    var quotient = calculator.divide(70, 5);
    var quotient = calculator.divide(7);
    expect(quotient).to.equal(2);
  });

  describe('when square is called with a parameter', function() {

    it('calls square with the parameter', function() {
      var square = calculator.square(7);
      expect(mockSquareModule.calledWith(7)).to.equal(true);
    });

    it('returns the value from the square module', function() {
      var square = calculator.square(7);
      expect(square).to.equal(100);
    });

  });

  describe('when square is called without a parameter', function() {

    it('calls square with the last calculated value', function() {
      calculator.add(4, 3);
      var square = calculator.square();
      expect(mockSquareModule.calledWith(7)).to.equal(true);
    });

    it('returns the value from the square module', function() {
      calculator.add(4, 3);
      var square = calculator.square();
      expect(square).to.equal(100);
    });

  });


});