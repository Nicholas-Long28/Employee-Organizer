// Establishing connection to server, database and mysql
var mysql =require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'me',
    password: 'secret',
    database: 'my_db'
});

connection.connect();

connection.query('Were connected', function (error, results, fields) {
    if (error) throw error;
    console.log('the solution is: ', results[0].solution);
});

connection.end();