const { Pool } = require("pg");
const pool = new Pool()


async function getAllUsernames(){
    const { rows } = await pool.query('SELECT * FROM usernames'); //The semi-colon is added automatically..?
    return rows
}

async function searchUserName(query){
    try{
        console.log(query)
        const { rows } = await pool.query('SELECT * FROM usernames')
    
        return rows
    }
    catch(err){
        console.log("Database Config:", {
            host: process.env.PGHOST,
            user: process.env.PGUSER,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD ? "******" : "undefined",
            port: process.env.PGPORT,
          });
        console.error(err)
        return 
    }
}

async function insertUsername(username){
    await Pool.query('INSERT INTO usernames (username) VALUES ($1)', [username])
    /* $1 is the placeholder to prevent sql injection. instead, add array of value to end. */
}

module.exports = {
    getAllUsernames,
    searchUserName,
    insertUsername
}