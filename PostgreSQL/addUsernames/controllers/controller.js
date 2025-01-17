const db = require('../db/queries')

async function getUsernames(){
    const usernames = await db.getAllUsernames() //posgre converts your db functions into built-in db functions
    console.log('Usernames: ', usernames)

    res.send('usernames ' + usernames.map(user => user.username).join(', '))
}

async function searchUserName(query){
    const result = await db.searchUserName(query)
    return result
}

async function createUsernameGet(req, res){
    //render username form
    res.redirect('/new')
    
}

async function createUsernamePost(req, res){
    const { username } = req.body
    await db.insertUsername(username)
    res.redirect('/')
}

module.exports = {
    getUsernames,
    searchUserName,
    createUsernameGet,
    createUsernamePost
}