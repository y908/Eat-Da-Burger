/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'b97a99e6714e10',
  password: 'ff44b7b8',
  database: 'heroku_56d96a65f3c593c'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;