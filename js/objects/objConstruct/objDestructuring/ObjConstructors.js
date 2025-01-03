//Object Constructor: When there is a specific type of object that needs duplication

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }

const player = new Player('steve', 'X');
console.log(player.name); // 'steve'

// Functions can always be added directly to the object:
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'