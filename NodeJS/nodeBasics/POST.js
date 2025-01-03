const axios = require('axios')
axios
.post('https://whatever.com/todos', { //PUT & DELETE requests follow this format as well..  
  todo: 'Buy the milk'  
})
.then( res =>{
    console.log(`statusCode: ${res.status}`) //responding with status: 405 "method not allowed."
})
.catch(err =>{
    console.error(err)
})