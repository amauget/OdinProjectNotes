const express = require('express')
const app = express()

const authorRouter = require('./routes/authorRouter')
const secondRoute = require('./routes/secondRoute')
const thirdRoute = require('./routes/thirdRoute')

app.use('/authors', authorRouter)

app.use('./second', secondRoute)

app.use('./third', thirdRoute)

const PORT = 3000

app.listen(PORT, () => {
    console.log('My first Express app! Listening on port' + PORT)
})