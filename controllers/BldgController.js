const db = require("../models");

// Defining methods for the buildings Controller
module.exports = {
 
  findAll: function(req, res) {
    db.Building
      .find(req.query)
      .sort({ date: -1 })
      .then(dbBuilding => res.json(dbBuilding))
      .catch(err => res.status(422).json(err));
  },
 //what is asking the database to get the neighborhood list
  findList: function (req, res){
   db.Building
    .distinct('neighborhood', function(err,response){
      res.json(response)
    })
    // .then(dbBuilding => res.json(response))
    // .catch(err => res.status(422).json(err));
  },

  getAddress: function (req, res){
   db.Building
    .distinct("address", function(err,response){
      res.json(response)
    })
    // .then(dbBuilding => res.json(response))
    // .catch(err => res.status(422).json(err));
  },

  // findAddressbyHood: function (req, res) {
  //   db.Building
  //   .find({"address": req.params.address})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // },

  findByHood: function(req, res) {
    db.Building
      .find({"neighborhood": req.params.neighborhood } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Building
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Building
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Building
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
