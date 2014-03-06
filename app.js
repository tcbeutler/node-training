var Calculator = require('./lib/calculator');
var calculator = new Calculator();
var express = require('express');

var app = express();

app.get('/calc', function(req, res)  {
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  if (isNaN(b)) b = undefined;
  res.send(200, String(calculator[req.query.op](a, b)))
});
app.listen(1337);

module.exports = app;