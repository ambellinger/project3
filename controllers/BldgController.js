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
 
  findList: function (req, res){
    res.send("working for real NOW");
 //   db.Building
  //  .find({})
  //   .distinct('neighborhood')
  //   .then(dbBuilding => res.json(dbBuilding.neighborhood))
  //   .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Building
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
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
