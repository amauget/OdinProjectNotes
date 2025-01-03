// The prototype is another object that the original object inherits from, 
// which is to say, the original object has access to all of its prototype’s methods 
// and properties.

// The prototype is the schematic used to build your objects (this.name, this.date etc)

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
  } /* Here is a prototype, which is ALSO AN OBJECT. 
  Created objects that reference the prototype take all its functions rules, layout etc. */
 
 
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
console.log(player1)

// VERIFYING OBJECT PROTOTYPE:
Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true


// Don't do this!
player1.__proto__ === Player.prototype; // returns true
player2.__proto__ === Player.prototype; // returns true
