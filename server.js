// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
const request = require("request")

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
const dbHelpers = require("./routes/dbHelpers")(db);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const booksRoutes = require("./routes/books");
const moviesRoutes = require("./routes/movies");
const restaurantsRoutes = require("./routes/restaurants");
const productsRoutes = require("./routes/products");
const miscRoutes = require("./routes/misc");
const apiRoutes = require("./routes/apis")

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(dbHelpers));
app.use("/api/books", booksRoutes(dbHelpers));
app.use("/api/movies", moviesRoutes(dbHelpers));
app.use("/api/restaurants", restaurantsRoutes(dbHelpers));
app.use("/api/products", productsRoutes(dbHelpers));
app.use("/api/misc", miscRoutes(dbHelpers));

//-----API routes-----//
app.use("/api/external", apiRoutes)

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/logister", (req, res) => {
  res.render("logister");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
