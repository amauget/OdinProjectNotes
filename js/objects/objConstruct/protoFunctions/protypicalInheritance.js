// Two reasons for prototypes: 
// 1. Saving memory
// 2. Prototypical Inheritance: Accessing embedded functions 

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');


function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }

Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// IF FIRST FUNCTION OUTPUTS TRUE, VALUEOF() IS AUTOMATICALLY DEFINED

player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
 
// What’s this .valueOf function, and where did it come from if we did 
// not define it? It comes as a result of
//  Object.getPrototypeOf(Player.prototype) having the value of 
// Object.prototype! 


// How to know if .valueOf function is defined on Object.prototype?
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true

// Summary: JS figures out which properties exist(or don't) on the
// prototype and starts traversing the chain to find the property or funct:

// END OF CHAIN CAN BE FOUND WHEN 
Object.getPrototypeOf(Object.prototype) /*  returns null.*/

// INSTANCEOF
player1 instanceof Object; //true
// tests whether the prototype property of a constructor appears anywhere
// within an ojbects prototype chain.



