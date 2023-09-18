
let connection;

// setup interface to handle user input from stdin


// callback for setupInput()
const handleUserInput = function(key) {
  //  Movement controls and to exit "Ctrl + C"
  if (key === '\u0003') {
    process.stdout.write('Ctrl+C pressed. Now exiting...');
    process.exit();
  }  else if (key === "w") {
    connection.write("Move: up");
    console.log("Pressed: Up");
  } else if (key === "a") {
    connection.write("Move: left");
    console.log("Pressed: Left");
  } else if (key === "s") {
    connection.write("Move: down");
    console.log("Pressed: Down");
  } else if (key === "d") {
    connection.write("Move: right");
    console.log("Pressed: Right");
  }
  
  if (key === "j") {
    connection.write("Say: Going Left");
  } else if (key === "i") {
    connection.write("Say: Going UP");
  } else if (key === "l") {
    connection.write("Say: Going Right");
  } else if (key === "k") {
    connection.write("Say: Going Down");
  } else if (key === "u") {
    connection.write("Say: Good Game ✅");
  } else if (key === "o") {
    connection.write("Say: Nice Move!");
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