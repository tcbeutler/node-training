var express = require('express');
var swagger = require('./swagger/common/node/swagger.js');
var packageJson = require('./package.json');
var fs = require('fs');

var Calculator = require('./lib/calculator');
var calculator = new Calculator();

var app = express();
swagger.setAppHandler(app);

/* swagger objects need to be { 'spec': {} and 'action': fuction() } */
var calcResource = {
  'spec': {
    'description': 'Calculator with basic memory functionality.',
    'path': '/calc',
    'notes': 'Excluding a second parameter will use the last calculated value or 0',
    'summary': 'Calculator',
    'method': 'GET',
    'params': [
      swagger.queryParam('op', 'calculator operation to perform', 'string', true, false, 'LIST[add,subtract,multiply,divide,square]'),
      swagger.queryParam('a', 'first operand', 'number', true, false),
      swagger.queryParam('b', 'second operand', 'number', false, false, undefined)
    ],
    'errorResponses': [swagger.errors.notFound('calculator')],
    'nickname': 'calculator'
  },
  'action': function (req, res, next) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    if (isNaN(b)) b = undefined;
    res.send(200, String(calculator[req.query.op](a, b)))
  }
};

swagger.addGET(calcResource);
swagger.configure('', '0.0.1');
hostSwagger(app);

app.listen(1337);

module.exports = app;

function hostSwagger(app) {
   /* Serve up swagger API at /docs */
  var docsHandler = express.static(__dirname + '/swagger/swagger-ui/');
  app.get(/\/docs\/?/, function(req, res, next) {
    if (req.url === '/docs') { // express static barfs on root url w/o trailing slash
      res.writeHead(302, { 'Location' : req.url + '/' });
      res.end();
      return;
    }
    // take off leading /docs so that connect locates file correctly
    req.url = req.url.substr('/docs'.length);
    return docsHandler(req, res, next);
  });
}