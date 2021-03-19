const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'root',
    database: 'projet_pise',
    password: ''
})

module.exports = con;