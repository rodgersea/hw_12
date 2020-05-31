const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Littlekitty1!',
    database: 'employees'
});

module.exports = connection;