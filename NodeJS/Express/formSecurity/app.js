const express = require('express')
const app = express()

const userRouter = require('./router/routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true })) 
//urlencoded is middleware to decode HTTP encoded data sent from simple forms.
// extended: false  will only accept string datatypes.

app.use('/', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
})

/* MAKES A SINGLE REQUEST TO ROUTER FILE*/