
const IP = 'localhost';
const PORT = 50541;
const DIRECTION_KEYS = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
};
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
const exitKey = '\u0003';




module.exports = {
  IP,
  PORT,
  DIRECTION_KEYS,
  MESSAGE_KEYS,
  exitKey
};
