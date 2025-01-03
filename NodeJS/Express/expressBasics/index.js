
//Make sure to run "npm install express"

const express = require('express')
const app = express() //assigns and calls the express function

app.get('/', (req, res) => res.send('Testing 123!')) 

const PORT = process.env.PORT || 3000 //goes with default evnironment port value if assigned.

app.listen(PORT, () => {
    console.log(`My first express app. Listening on port ${PORT}!`)
})

// --watch can be added to the node run command to allow realtime updates to the server.
//add as a script to package 


/* DOCUMENTATION: https://expressjs.com/en/4x/api.html */