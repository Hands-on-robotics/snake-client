
// access the client file in folder and create connect() function variable from object.
// require always runs all the code in the required file...

const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");


let conn = connect();
setupInput(conn);
