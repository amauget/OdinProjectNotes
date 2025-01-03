// Don't do this!
Player.prototype = Person.prototype;
// Use Object.setPrototypeOf(Player.prototype, Person.prototype)



function Person(name){
    this.name = name;
};

Person.prototype.sayName = function(){
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker){
    this.name = name; 
    this.marker = marker;
}

Player.prototype.getMarker = function(){
    console.log(`My marker is '${this.marker}'.`)
}

Object.getPrototypeOf(Player.prototype); //Returns object.prototype IE 'null'

//Now make 'Player' objects inherit from 'Person';

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.setPrototypeOf(Player.prototype); //returns Person.prototype
// 1st argument intakes two arguments,
// 2nd is the one which you want the first arg to inherit from. Ensuring
// that created Player objects are able to access the .sayName() and .getMarker()
// functions through their prototype chains.

// NOTE. SETPROTOTYPE NEEDS TO BE DONE BEFORE OBJECTS ARE CREATED.


const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');.

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'