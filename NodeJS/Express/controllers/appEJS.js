const express = require('express')
const app = express()
const path = require('node:path')

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
    ]

const users = ["Rose", "Cake", "Biff"];

const assetsPath = path.join(__dirname, 'public')

app.use(express.static(assetsPath)) /* declares as static pages, and declares route START AT ROOT! Not in "views"*/

//Enable EJS Template Engine

app.set('views', path.join(__dirname, 'views')) //moves root to 'views' dir.
app.set('view engine', 'ejs') //declares engine as ejs

app.get('/', (req, res) => {
    res.status(200)
    res.render('index', {message: 'EJS Rocks!', links: links, users: users}) //sends arg to EJS file as prop
})

app.use('*', (req, res) => { // catch all. "use" catches other types of requests missed by "get". (POST, PUT, DELETE, ETC)
    res.status(404).render('404', {error: '404'})
})

app.use((err, req, res, next) => { //ALWAYS has 4 args. Telltale sign of error handling.
    console.error(err)
    res.status(err.statusCode || 500).send(err.message) //Update status code then send the error message
}) 

const PORT = 3000

app.listen(PORT, () => {
    console.log('Running on Port: ', PORT)
})