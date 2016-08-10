/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
};

connection.connect();
module.exports = connection;