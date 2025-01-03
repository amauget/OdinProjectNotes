// A class is a an object and function combination that provides callable arguments for
//  defined object.
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

/* BELOW TRACES ALL INFORMATION ABOUT CLASS FUNCTION: */
// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

/* differences between regular functions and classes
  Calling User() will result in an error.

  alert(User) displays User function literal, doesn't call and run arguments.

  Class methods are non-enumerable, 
    IE they can't be counted over like array indexes or object components for example. 

  Class variables "use strict" so it's all contained to the class (No global variables come out)
  */