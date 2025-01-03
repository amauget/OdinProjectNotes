/* https://www.youtube.com/watch?v=DHvZLI7Db8E */
let p = new Promise((resolve, reject) =>{
  // inside needs to define what the promise is.
  let a = 1 + 1;

  if(a == 2){
    resolve('Success');
  }else{
    reject('Failed')
  }
})

p.then((message) => {
  console.log(`This is in the then: ${message}`);
}).catch((message) =>{
  console.log(`This is the catch: ${message}`);
})
 /* .then() is called for resolve
    .catch() is called for reject
 */