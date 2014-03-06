supertest = require('supertest');

describe('calculator app', function() {

  beforeEach(function() {
    app = require('../app');
  });

  //NOTICE - "done" parameter in the unit test. Allows for asynchonous testing.
  it('calls the calculator with parameters from the query string', function(done) {
    supertest(app)
      .get('/calc?op=add&a=5&b=7')
      .expect(200)
      .expect('12', done);
  });

  //First performs an add, then multiplies the last value by 2.
  it('retains the last value when "b" parameter isnt passed', function(done) {
    supertest(app)
      .get('/calc?op=add&a=5&b=7');

    supertest(app)
      .get('/calc?op=multiply&a=2')
      .expect(200)
      .expect('24', done);
  });

  it('throws an error when op is invalid', function(done) {
    supertest(app)
      .get('/calc?op=invalid&a=5&b=7')
      .expect(500, done);
  });

});