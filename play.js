// access the client file in folder and create connect() function variable from object.
// require always runs all the code in the required file...
const connect = require('./client');


// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// callback for setupInput()
const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.stdout.write('Ctrl+C pressed. Now exiting...');
      process.exit();
    }
  });
};

// calling both declared functions
setupInput();
