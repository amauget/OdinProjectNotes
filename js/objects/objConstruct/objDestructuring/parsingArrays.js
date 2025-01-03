// Vars can be swapped
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

//arrays in functions can be parsed.

function f() {
    return [1, 2];
  }
  
  const [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2

//array indexes can be ignored
function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3
  

//binding pattern can be used in lieu of rest variable
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1

const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4

const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6