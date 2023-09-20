
// This file handles the connection to the snek-multiplayer server

const net = require('net');
const { IP, PORT } = require('./constants');


// Handles server connection
const connect = function() {

  // Creates server connection
  const conn = net.createConnection({ host: IP, port: PORT });
  // IP and PORT are both hard coded in constants.js

  // Upon Connection
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: EHH");  // Writes user's name to server.
  });
  
  // All incoming data is interpreted as standard text.
  conn.setEncoding('utf8');
  
  // Handles incoming data from server and logs it to console.
  conn.on('data', (data) => {
    console.log('Servers says: ', data);
  });
  

  // Returns the variable for the server IP and PORT object.
  return conn;
};

// Exported to play.js
module.exports = { connect };
