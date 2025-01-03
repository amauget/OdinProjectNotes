/* // bound methods use 'this.method' and are bound to the function.
  if an object method is passed around and called in another context,
  this won't be referenced to its object anymore.

  FOR EXAMPLE: 

  class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
*/
/* Bind this in the constructor to allow it to be referenced. */
class button{
  constructor(value){
    this.value = value;
  }
  
  click = () => {
    alert(this.value);
    /*  click = () => {...} is created on a per-object basis, 
    there’s a separate function for each Button object, with this 
    inside it referencing that object. We can pass button.click around 
    anywhere */
  }
}

let Button = new button('hello');

setTimeout(button.click, 1000); //hello