// Say we wanted to create an object with a name, age and color, we would write it as follows:

const name = "Bob";
const age = 28;
const color = "red";

// longhand
let thatObject = { name: name, age: age, color: color };

// Here is the shorthand version:
const nowFancyObject = {name,age,color};

// Both output { name: "Bob", age: 28, color: "red" }

// OR
console.log({name,age,color}) /* this also works */