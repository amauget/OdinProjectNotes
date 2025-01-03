/* NOTE: THE ARTICLE DECLARED ALL VARIABLES W/ VAR */


/* promise layout / components */
let p = new Promise(function(resolve, reject){
  //do an async task and then...
  if(/* good condition */){
    resolve('success');
  }
  else{
    reject('failure');
  }
});

p.then(function(result){
  //Do something w/ result.
}).catch(function(){
  /* error :( */
}).finally(function(){
  // executes regardless of success or failure.
})

/* EXAMPLE */
function get(url){
  //return a new promise.
  return new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function(){
      //this is called even on 404 etc
      //so always check status.

      if(req.status === 200){
        //resolve the promise w/ the response text.
        resolve(req.response);
      }
      else{
        // Otherwise reject with the status text which
        // will hopefully be a meaningful error.
        reject(Error(req.statusText));
      }
    };
    //handle network errors.
    req.onerror = function(){
      reject(Error('Network Error'));
    }

    //make the request
    req.send();
  });
}
//use the get()

get('story.json').then(function(response){
  console.log('Success!', response);
}), function(error){
  console.error('Failed', error);
}