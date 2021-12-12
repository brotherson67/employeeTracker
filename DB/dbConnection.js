const mysql = require('mysql2');

// Connect to DB
const db = mysql.createConnection(
    {
        host: 'localhost', 
        // Your mysql username
        user: 'root', 
        // your mysql password
        password: 'SQLPassword97',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;