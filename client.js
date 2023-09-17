
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



  // conn object used to receive data with a callback function.
  conn.on('data', (data) => {
    console.log('Servers says: ', data);
  });

  // incoming data interpreted as text.
  conn.setEncoding('utf8');

  // return the net.createConnection({host: 'localhost", port: 50541}) variable.
  return conn;
};

// module exports is an empty object and can be assigned key-value pairs like any object.
// keys will be accessible in the require() object of the destination file.
// function exported as an object within an object.
module.exports = { connect };
