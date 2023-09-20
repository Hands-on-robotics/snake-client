
// Run this file to play snek-multiplayer
const { connect } = require('./client');
const { setupInput } = require('./input');

// While trying to connect to the server
console.log("Connecting ...");

// connect() passes the servers connection into setupInput
setupInput(connect());
