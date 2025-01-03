/* Basic class syntax:
  class MyClass(){
    constructor(){...}
    method1(){...}
    method2(){...}
    method3(){...}
    ...
  }

Example:
  */
 class User{
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(`Hi, ${this.name}!`) /* argument is assigned to this.name */
  }
 }
 let user = new User('John');
 user.sayHi(); //Output: Hi John! 

 /* NOTE: There is no comma between class methods! */