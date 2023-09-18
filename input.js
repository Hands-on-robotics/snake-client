
const {
  DIRECTION_KEYS,
  MESSAGE_KEYS,
  exitKey
} = require('./constants');

let connection;

// setup interface to handle user input from stdin


// callback for setupInput()
const handleUserInput = function(key) {
  //  DIRECTION_KEYS and to exit "Ctrl + C"
  if (key === exitKey) {
    process.stdout.write('Now exiting...');
    process.exit();
  }  else if (DIRECTION_KEYS[key]) {
    connection.write(DIRECTION_KEYS[key]);
    console.log(DIRECTION_KEYS[key]);
  } else if (MESSAGE_KEYS[key]) {
    connection.write(MESSAGE_KEYS[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// function exported in object of object.
module.exports = { setupInput };