
// import the net module {object} from node.js
const net = require('net');

//create a connection function
const connect = function() {

  // declare the variable name that will establish the connection.
  const conn = net.createConnection(
    // conn holds an identification object in the createConnection() function.
    {
      host: 'localhost',
      port: 50541,
    }
  );

  // upon connection
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    // write user name to server.
    conn.write("Name: EHH");
 
    
  });


  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)


  // conn object used to receive data with a callback function.
  conn.on('data', (data) => {
    console.log('Servers says: ', data);
  });

  // incoming data interpreted as text.
  conn.setEncoding('utf8');

  // return the net.createConnection({host: 'localhost", port: 50541}) variable.
  return conn;
};

// a connection console notification for the user.
console.log("Connecting ...");

// start connection with the declared function.
connect();

// module exports is an empty object and can be assigned key-value pairs like any object.
// keys will be accessible in the require() object of the destination file.
module.exports = connect;
