// Set up MySQL connection.
let mysql = require("mysql");

//Read and set any environment variables with the dotenv package.
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "diablo2",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
