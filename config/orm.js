// Import MySQL connection.
let connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
let orm = {
  selectAll: function(tableInput, cb) {
    connection.query("SELECT * FROM ??;", [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    connection.query("INSERT INTO ?? (??) VALUES (?);", [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
 
  updateOne: function(table, objColVals, condition, cb) {
    connection.query("UPDATE ?? SET ? WHERE ?;", [table, objColVals, condition], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model.
module.exports = orm;