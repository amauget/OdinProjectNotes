// Used to create new objects

// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
//   let hero1 = new Hero('Bjorn', 1);

//   Output
// Hero {name: "Bjorn", level: 1}

Object.getPrototypeOf(hero1);
// Output: constructor: ƒ Hero(name, level)


// USE PROTOTYPE TO ADD METHODS TO CONSTRUCTOR FUNCTION:
Hero.prototype.greet = function(){
    return `${this.name} says hello.`;
}
// Allows all descendants of Hero the ability to call the greet function.
hero1.greet();
//Output: Bjorn says hello.

// THE CALL FUNCTION:

function warrior(name, level, weapon){
    Hero.call(this, name, level) /* Imports these Hero traits to warrior */

    //add a new property
    this.weapon = weapon;
}

function healer(name, level, spell){
    Hero.call(this, name, level);

    this.spell = spell;
}

warrior.prototype.attack= function(){  /* This is used for messages */
    return`${this.name} attacks with the ${this.weapon}.`;
}

healer.prototype.heal = function(){
    return `${this.name} heals with ${this.spell}.`;
}

// Create Characters:

const hero1 = new warrior('bjorn', 1, 'axe');

const hero2 = new healer('Kanin', 1, 'cure');

hero1.attack() /* Outputs custom string with name and weapon. */


// This links warrior and healer to Hero.prototype.. allowing greet() to be called for warrior and healer.
Object.setPrototypeOf(warrior.prototype, Hero.prototype);
Object.setPrototypeOf(healer.prototype, Hero.prototype);

// All other prototype methods added below

hero1.greet(); /* output: Bjorn says hello. */