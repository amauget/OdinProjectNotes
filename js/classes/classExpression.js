// Just like functions, classes can be defined inside another expression.
let User = class myClass{
  sayHi(){
    console.log(myClass);
  }
};

new User().sayHi(); /* Shows myClass definition */
// HOWEVER
console.log(myClass) /* Outputs an error because classes aren't callable outside of function. */

//Classes can be made "on-demand"
function makeClass(phrase){
  return class{
    sayHello(){
      console.log(phrase);
    }
  };
}
//create a new class
let user = makeClass("Hello");

new user().sayHello(); // = 'Hello'