
// This file holds all the constant variables

// IP address and PORT number for client.js
const IP = 'localhost';
const PORT = 50541;

// Exit key assignment for input.js
const exitKey = '\u0003';

// Direction key assignments for input.js
const DIRECTION_KEYS = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
};

// Message key assignments for input.js
const MESSAGE_KEYS = {
  "j": "Say: Going Left",
  "i": "Say: Going Up",
  "l": "Say: Going Right",
  "k": "Say: Going Down",
  "u": "Say: Good Game ✅",
  "o": "Say: Nice Move!",
  ";": "Say: Do you like pizza?",
  "n": "Say: Yes, thank you"
};

// Exporting constants to client.js and input.js
module.exports = {
  IP,
  PORT,
  DIRECTION_KEYS,
  MESSAGE_KEYS,
  exitKey
};
