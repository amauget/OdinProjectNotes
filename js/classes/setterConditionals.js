// getter/setters can include conditonals making them part function, part object.
let user = {
  get name() {
    return this._name;
     /* underscore is an industry standard for properties contained within a class. 
     _name should not appear anywhere outside of get/set.*/
  },

  set name(value) {
    if (value.length < 4) {
      // alert . ("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
// console. log(user.name); // Pete

user.name = "Al"; // Name is too short...

// Calculating age with get set and factory functions:
function thisUser(name, birthday){
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new thisUser("John", new Date(1992, 6, 1));

console.log(john.age) /* outputs 32 at date of writing */