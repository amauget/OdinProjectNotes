start PostgreSQL w/ "psql"
ls databases w/ "\l"
"CREATE DATABASE top_users;"  <-- Don't forget the semi-colon!

\c top_users    to connect to new database

CREATE TABLE usernames (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 255 ) 
);

\d      verify that the table was created.


INSERT INTO usernames (username)
VALUES ('Ron'), ('Jon'), ('Don');               Add sample usernames

SELECT * FROM usernames;                    To test the entries


INSTALL .ENV
npm install dotenv