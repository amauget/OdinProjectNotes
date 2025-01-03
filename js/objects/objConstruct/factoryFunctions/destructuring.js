// A means of unpacking or extracting values from an object or array
const obj = { A: 1, B: 2 };
const { A, B } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [ zerothEle, firstEle ] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array

// The remaining elements can be given a "rest" variable to be accounted for
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50]; /* don't forget ... to dispurse the nested array */

console.log(rest);
// Expected output: Array [30, 40, 50]