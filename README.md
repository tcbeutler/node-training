node-training
=============
  
Simple training in node using our set of tools.
  
###Step 0 - Running something in node.
  
Clone this repo, then run `git checkout step-0`  
Run `node app` to execute the code in app.js.

node executes any javascript that will run on Google's V8 engine.

**require**
- node's method of importing and exporting functionality and objects between files or modules.
- [node includes a set of built-in core modules.](http://nodejs.org/api/) These can be "required" at any time.
- node's [module](http://nodejs.org/api/modules.html#modules_the_module_object) can be referenced at any time.
  - module.exports (alias exports) determines exactly what is returned when calling **require** on a file.
  - This can be an object, function, string, etc. 
- Calling **require** on a directory looks for a file called `index.js` at the root and gets its exports.
- Require must use relative paths unless the module is a core module or is locted in the `node_modules` folder.

###Step 1 - Unit testing with mocha and chai
Run `git checkout step-1 -f`  
Run `npm install`. You should now have mocha and chai installed in your `node_modules` folder.

Our next goal is to move into some TDD/BDD with the tools we're using for this platform.
1. Run `npm test` to see all our unit tests located in `calculator.test.js` fail.
2. Open calculator.js and try to make the unit tests pass!
3. Write unit tests for calculator.divide(), then make them pass.

[**mocha**](http://mochajs.org/) - Our unit test runner.  
[**chai**](http://chaijs.com/) - Our assertion library.  
Chai provides 3 diffeent assertion formats:
* Assert
* Expect
* Should

We have decided to use the **expect** syntax in our platform, so stick to that.

###Step 2 - Mocking dependencies with sinon and proxyquire
Run `git checkout step-2 -f`
Run `npm install`. You should now have sinonjs and proxyquire.

[**proxyquire**](https://github.com/thlorenz/proxyquire) - lets us inject dependencies that our modules are using.  
[**sinon**](http://sinonjs.org/) - lets us mock and stub functionality.  
[**sinon-chai**](https://github.com/domenic/sinon-chai) - Chai assertions for sinon.

Here we're going to use our `square.js` file as a functionality to provide a square function to our calculator.  
For step 2:
1. In calculator.test.js, our calculator should not actually include the real square module. Use proxyquire for this.
2. In calculator.test.js, our calculator should use sinon to create the stub for the square module function.

###Step 3 - Hosting in express.
Run `git checkout step-3 -f`
Run `npm install express --save` to grab express. This adds it to your package.json file as well as installs it.

[**express**](http://expressjs.com/) - Web application framework. Built on top of connect.  
[**supertest**](https://github.com/visionmedia/supertest) - Allows integration testing of http servers including express apps.

####Asynchronous unit testing
Open the newly created app.test.js. Notice the unit test functions now contain a parameter (done).
This parameter is a callback function to tell mocha the unit test is complete. Use this any time you're unit testing
asynchronous code.

###Step 4 - Swagger.
Run `git checkout step-4 -f`
Run `npm start`
Navigate to localhost:1337/docs and check out swagger's ability to make API calls!


####Steps
1. Open app.js. We now have express and our calculator.
2. Create a new express app.
3. Create a route in express to `/calc` that allows operations to be performed.
    - It should take a query string with the following parameters:
        1. op - add, multiple, divide, etc
        2. a - first operand
        3. b - second operand
    - Example query string: `localhost:1337/calc?op=add&a=5&b=10`
4. Listen on port 1337.
5. Start node to host!

####Notes
To see the solution to any step 'n', do `git checkout step-n-solved -f`

###To-do
1. Express body parser, middleware, etc
2. nock
3. promises A+ / q
4. Jshint
5. Istanbul code coverage 
