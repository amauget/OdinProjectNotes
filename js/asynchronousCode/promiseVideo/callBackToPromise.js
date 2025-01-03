const userLeft = false;
const userWatchingCatmeme = false;

function watchTutorialPromise(){
  return new Promise((resolve, reject) => {
    if(userLeft){
      reject({
        name: 'User Left', 
        message: ':('
      })
      
    }else if(userWatchingCatmeme){
      reject({
        name: 'user watching a cat meme',
        message: 'this video < cat'
      });
    }else{
      setTimeout(() => resolve('You watched the video in full!'), 5000);
    };
  })

}
watchTutorialPromise().then((message) => {
  console.log('success: ' + message)
}).catch((error) =>{
  console.log(error.name + ' ' + error.message)
})



/* 
errorCallback() --> reject()
callback() --> resolve()

instead of nesting callbacks, you can chain the promises with .then
*/