// Case where you can call promise.resolve() or .reject() without
// using the "new" keyword.

let userCache = {};

function getUserDetail(username){
  // in both cases, cached or not, a promise will be returned.

  if(userCache[username]){
    //return a promise without the new keyword.

    return Promise.resolve(userCache[username]);
  }
  /* use the fetch api to get the info and fetch returns to a promise */

  return fetch('users/' + username + '.json')
    .then(function(result){
      userCache[username] = result;
      return result;
    })
    .catch(function(){
      throw new Error('Could not find user: ' + username);
    })
}

/* 
'then' method: 
  allows you to react to the promise. the first then method callback 
  receives the result given to it by the resolve() call.

  CHAINING THEN CALLBACKS:
*/
new Promise(function(resolve, reject){
  //a mock async action using setTimeout
  setTimeout(function(){resolve(10)}, 3000);
})
.then(function(num){console.log('first then: ', num); return num * 2; })
.then(function(num){console.log('second then:', num); return num * 2; })
.then(function(num){console.log('last then:', num)});
/* From the console:
  first then: 10
  second then: 20
  last then: 40
Each then receives the result of previous then.
  */