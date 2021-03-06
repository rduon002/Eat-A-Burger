// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {

  //Select all database burgers
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //The variables cols and vals are arrays. 
  //val field values for new record i.e burger_name: 
  //Add burger
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //Update devoured burgers
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;