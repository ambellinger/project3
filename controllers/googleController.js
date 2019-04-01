const axios = require("axios");
const router = require("express").Router();


module.exports = {
  findAll: function (req, res) {
    axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", { params: req.query })
    .then(results => results.data)
    .then(results => res.json(results))
    .then(console.log(results))
    .catch(err => res.status(422).json(err));
  }
}




