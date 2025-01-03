const userLeft = false;
const userWatchingCatmeme = false;

function watchTutorialCallback(callback, errorCallback){
  if(userLeft){
    errorCallback({
      name: 'User Left', 
      message: ':('
    })
    
  }else if(userWatchingCatmeme){
    errorCallback({
      name: 'user watching a cat meme',
      message: 'this video < cat'
    });
  }else{
    callback('You watched the video in full!');
  };
}

watchTutorialCallback((message)=>{
  console.log('success: ' + message)
}, (error) =>{
  console.log(error.name + ' ' + error.message)
})


/* 
checks two conditions: whether the user left mid way through the 
    vid, and whether they watched a cat meme instead of vid.

    if both are false, user watched the video in full,
    
    if either are true, error, name/message. both == both name/message
*/