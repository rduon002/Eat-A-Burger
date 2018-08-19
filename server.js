//Dependencies
let express = require("express");
let bodyParser = require("body-parser");

//Define port the server will be listening on.
let PORT = process.env.PORT || 3000;

let app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

//Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgersController.js");

app.use(routes);

//App is listening...
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});