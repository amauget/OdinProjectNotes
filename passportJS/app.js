require('dotenv').config()
const path = require("node:path")
const bcrypt = require('bcryptjs')

const { Pool } = require("pg")
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const { hash } = require('node:crypto')
const LocalStrategy = require('passport-local').Strategy

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }))

app.use(express.urlencoded({ extended: false }))
app.use(passport.session())

//Receives the user object of a successful login. Then stores the user id property in session data
passport.serializeUser((user, done) => {
    done(null, user.id)
})

/* A QUICK TIP: SOMETHING LIKE "
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});" 
CAN BE USED TO CUSTOMIZE THE MIDDLEWARE. 
In this ex. initiating this before before rendering the views will allow access to current user in all routes, instead of manually passing into all controllers
*/

passport.deserializeUser(async (id, done) => {//retreives user data from session ID
    try {
        const { rows } = await pool.query("SELECT * FROM userData WHERE id = $1", [id])
        const user = rows[0]

        done(null, user)
    } catch(err) {
        done(err)
    }
})

passport.use( //CALLED WHEN USING passport.authenticate()
    new LocalStrategy(async (username, password, done) => {
        try{
            const { rows } = await pool.query("SELECT * FROM userData WHERE username = $1", [username])
            const user = rows[0]

            const match = await bcrypt.compare(password, user.password) //decrypts stored value, compares to input value.
            
            if(!user){
                return done(null, false, {message: 'Incorrect username'})
            }
            if(!match){
                return done(null, false, {message: 'incorrect password'})
            }
            return done(null, user)
        }
        catch(err){
            return done(err)
        }
    })
)


app.get('/', async (req, res) => {
    
    res.render('index', { user: req.user })
})

app.get('/signUp', (req, res) => {
    res.render('signUp')
})

app.post("/signUp", async (req, res, next) => {    
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10) //hashes password
        await pool.query("INSERT INTO userData (username, password) VALUES ($1, $2)", [
            req.body.username,
            hashedPassword,
        ])        
        res.redirect('/')
    }
    catch(err){
        return next(err)
    }
})
app.get('/login', (req, res) => {
    res.render('login')
})

app.post(
    "/login",
    passport.authenticate("local", { //calls local strategy
      successRedirect: "/",
      failureRedirect: "/login"
    })
)

app.get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err)
      }
      res.redirect("/")
    })
  })
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})