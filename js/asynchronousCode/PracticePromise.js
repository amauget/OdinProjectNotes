// let name = document.querySelector('.name');
// let color = document.querySelector('.color');
let btn = document.querySelector('button');

btn.addEventListener('click', (event) =>{
  // let promise = new Promise(function(resolve, reject) {
  // setTimeout(() => resolve("done!"), 1000);
  // });

  // resolve runs the first function in .then
/*   promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  ); */

  let name = 'Aaron';
  let color = 'blue'
  let item = new Promise((resolve, reject) =>{
    
    if(name=== 'Aaron' && color === 'blue'){
      setTimeout(() => resolve(("Itendity Validated!")), 1000);
      /* Delays by 1 second. */
    }else{
      reject('You shouldnt be in here!');
    }
  })

  item.then((message) => {
    console.log(message)
  }).catch((error) =>{
    console.log(error)
  })
}).finally(() =>{ /* runs no matter what. */
  console.log('promise complete')

})

