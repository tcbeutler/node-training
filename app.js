//Node runs this code without waiting for setTimeout to fire. Instead it lets setTimeout fire an event after the alloted time.
for(var i=0; i<3; i++) {

  setTimeout(function() {
    console.log("These will all execute first.");
  }, 1000);

  setTimeout(function() {
    console.log("And these will all execute 1 second later.");
  }, 2000);

}

//Import node's http module and stand up a simple web server.
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//Require our own file.
var square = require('./lib/square');

//Node's event loop can handle multiple servers on one thread. 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var squares = []
  for (var i=0; i<10; i++) {
    squares.push(square(i));
  }
  res.end(squares.join(' '));
}).listen(1338, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1338/');

//Read from file using node's fs module.
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //Here, note how we want to write code in nodejs using callbacks.
  fs.readFile('data/helloFromFile.txt', function(err, fileData) {
    if (err) {
      throw new Error('error reading file.');
    }
    res.end(fileData);
  });
}).listen(1339, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1339/');