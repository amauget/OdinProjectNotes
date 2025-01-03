const axios = require('axios') //A library that makes GET requests much simpler.

axios.get('https://example.com/somePage')
.then(res => { //where res indicates response
    console.log(`statusCode: ${res.status}`) //response is in JSON format
    console.log(res)
})
.catch(err => {
    console.error(err)
})