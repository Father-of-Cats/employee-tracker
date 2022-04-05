const mysql = require('mysql2') 

// Connect to DB
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        // Your MYSQL password
        password: 'password',
        database: 'emptrack'
    },
    console.log('connected to the election database')
)