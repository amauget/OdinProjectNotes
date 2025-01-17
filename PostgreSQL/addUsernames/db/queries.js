const pool = require("./pool");
//do not destructure

async function getAllUsernames(){
    const { rows } = await pool.query('SELECT * FROM usernames;'); //The semi-colon is added automatically..?
    return rows
}

async function searchUserName(query){
    try{
        const { rows } = await pool.query('SELECT username FROM usernames WHERE username = $1;', [query])
        
        if(rows.length > 0){
            return rows
        }
        return 'No results'
    }
    catch(err){
        console.error(err)
        return 
    }
}

async function insertUsername(username){
    await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username])
    /* $1 is the placeholder to prevent sql injection. instead, add array of value to end. */
}

module.exports = {
    getAllUsernames,
    searchUserName,
    insertUsername
}