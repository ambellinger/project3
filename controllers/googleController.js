const axios = require("axios");
const router = require("express").Router();

console.log("from google controller");

module.exports = {
  findAll: function (req, res) {
    axios
    // .get("https://maps.googleapis.com/maps/api/geocode/json", { params: req.query })
    // .get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=")
    .then(results => results.data)
    .then(results => res.json(results))
    .then(console.log(results))
    .catch(err => res.status(422).json(err));
  }
}

