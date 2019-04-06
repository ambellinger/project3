const express = require("express");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require("mongoose");
const session = require('express-session')
const dbConnection = require('./models')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const user = require('./routes')

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

// MIDDLEWARE
app.use(allowCrossDomain)
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

// Routes
app.use('/user', user)
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/archfinder");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});