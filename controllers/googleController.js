const axios = require("axios");
const router = require("express").Router();
// const db = require("../models");

module.exports = {

  getAddress: function (req, res){
    // db.Building
    // .find({"address": req.params.address } )
    // console.log("address req params address" + req.params.address)
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err))
  // findAll: function (req, res) {
    axios
    // .get("https://maps.googleapis.com/maps/api/geocode/json", { params: req.query })
    .get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=")
    .then(results => results.data)
    .then(results => res.json(results))
    .then(console.log("google controller results" + results))
    .catch(err => res.status(422).json(err));
  }
}

