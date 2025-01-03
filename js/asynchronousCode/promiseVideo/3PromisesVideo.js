const recordVideoOne = new Promise((resolve, reject) =>{
  resolve('video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) =>{
  resolve('video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) =>{
  resolve('video 3 recorded')
})

/* Goal is to run all 3 of these in parallel with goal of 
achieving something once all 3 are resolved.
*/

Promise.all([
  recordVideoOne, 
  recordVideoTwo, 
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})

/* Promise.race() is similar, but will return only when first resolve 
  is complete. 
*/