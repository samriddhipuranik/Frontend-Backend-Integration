const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'my_database'
});

module.exports = pool;
