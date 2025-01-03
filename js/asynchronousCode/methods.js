/* 
Methods of creating asynchronous code:

callbacks: where you call a function to reinitiate its value/task
      can get bulky if multiple functions require callbacks at a time.

promises:
      A promise is an object that might producce a value at some point
      in the future.
        ex.
*/
// PROMISE EX.
const getData = function(){
  let data = 'fetch data from some API'
  // clean up the data and return as obj.
  return data;
}

const myData = getData();
const pieceOfData = myData['Info'];
/* This function will have a delay, since it requires API access
  So, we must initiate a promise to avoid the return of an 
  undefined value.
*/

// HERE IS THE FIX
const myDataFix = getData();

myData.then(function(data){/* .then() tells it to wait until the promise is resolved */
  const pieceOfData = data['Info']; // and THEN run the function inside
})