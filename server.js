const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Connect to the Mongo DB
db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
  });

