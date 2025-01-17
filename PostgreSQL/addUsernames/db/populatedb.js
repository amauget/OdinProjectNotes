//Automating database population

const { Client } = require('pg')

const SQL = `
    CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
    );

    INSERT INTO usernames (username)
    VALUES
        ('Ron'),
        ('Don'),
        ('Jon');
`
//This script is designed to be ran once.

async function main(){
    console.log('seeding..')
    const client = new Client({
        connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users",

    })
    await client.connect()
    await client.query(SQL)
    await client.end()

    console.log('Done')
}

