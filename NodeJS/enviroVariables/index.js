require('dotenv').config()

console.log(process.env) // remove this after you've confirmed it is working

// ACCESSING ENVIRO VARIABLES
if(process.env.NODE_ENV === 'prod'){
    return true
}