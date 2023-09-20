
// This file handles input from the user

// Key assignments from constants.js
const {
  DIRECTION_KEYS,
  MESSAGE_KEYS,
  exitKey
} = require('./constants');

// Global variable declared to pass parameter value into handle user input
let connect;

// Handles Setup for User Input
const setupInput = function(conn) {
  
  // Shorten variable names
  const stdin = process.stdin;
  connect = conn;
  
  // Sets Encoding
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // User inputs are sent to handle user input
  stdin.on('data', handleUserInput);
};


// Handles user input
const handleUserInput = function(key) {

  // Exit key is "Ctrl + C"
  if (key === exitKey) {
    process.stdout.write('Now exiting...');
    process.exit();

  // Directional inputs for snake
  }  else if (DIRECTION_KEYS[key]) {
    connect.write(DIRECTION_KEYS[key]);
    console.log(DIRECTION_KEYS[key]);

  // Message inputs for snake to display
  } else if (MESSAGE_KEYS[key]) {
    connect.write(MESSAGE_KEYS[key]);
  }
};

// Exported to play.js
module.exports = { setupInput };
