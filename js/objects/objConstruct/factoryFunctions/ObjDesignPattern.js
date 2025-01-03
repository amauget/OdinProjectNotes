// DESIGN PATTERNS: Ex. Tic Tac Toe

// example one ...BAD
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two: Provides MUCH better readability and allows calling items with less code.
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};

function printName(player) { /* Renewable function allowing for unknown outcomes and scalability*/
    console.log(player.name); 
  }
//   vs. 
console.log(playerOneName);
console.log(playerTwoName);