/* Finally callback is called regardless of success or failiure. */

(new Promise((resolve, reject) => { reject("Nope"); }))
    .then(() => { console.log("success") })
    .catch(() => { console.log("fail") })
    .finally(res => { console.log("finally") });

// >> fail
// >> finally

/* Promise.all:
  for times when you trugger multiple async interactions but only want
  to respond when all of them are completed.
*/
Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});

// Promise.race:
/* instead of waiting for all promises to roslve/reject, .race triggers 
as soon as any promise in the array is resolved or rejected. */

let req1 = new Promise(function(resolve, reject){
  //a mock async action using setTimeout
  setTimeout(function(){ resolve('first!')}, 8000);

})
let req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000)});

Promise.race([req1, req2]).then(function(one){
  console.log('then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});