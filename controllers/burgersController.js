//Require express
let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// Generating routes
//Grab burgers in database
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  //Adds burgers to database
  router.post("/", function(req, res) {
    burger.insertOne("burger_name",
      req.body.name, function() {
      res.redirect("/");
    });
  });
  //Update devoured burgers
  router.put("/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, {id: req.params.id}, function() {
      res.redirect("/");
    });
  });
  
  
  // Export routes for server.js to use.
  module.exports = router;