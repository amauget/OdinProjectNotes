/* Array destructuring calls the iterable protocol of the right-hand side. 
Therefore, any iterable, not necessarily arrays, can be destructured. */

const [a, b] = new Map([
    [1, 2],
    [3, 4],
  ]);
  console.log(a,b); // [1, 2] [3, 4]
  let array = [...a, ...b]
  console.log(array) //[ 1, 2, 3, 4 ]


  /* NON-ITERABLES CANNOT BE DESTRUCTURED AS ARRAYS! 
  THE FOLLING EXAMPLE WILL NOT WORK!!!!!!!*/
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable



