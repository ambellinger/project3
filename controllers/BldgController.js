const db = require("../models");

// Defining methods for the buildings Controller
module.exports = {




  findAll: function (req, res) {
    db.Building
      .find(req.query)
      .sort({ date: -1 })
      .then(dbBuilding => res.json(dbBuilding))
      .catch(err => res.status(422).json(err));
  },
  //what is asking the database to get the neighborhood list
  findList: function (req, res) {
    // res.send("working for real NOW");
    db.Building
      .distinct('neighborhood', function (err, response) {
        res.json(response)
      })
    // .then(dbBuilding => res.json(response))
    // .catch(err => res.status(422).json(err));
  },
  findByHood: function (req, res) {
    db.Building
      .find({ "neighborhood": req.params.neighborhood })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.Building
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  create: function (req, res) {
    db.Building
      .create(req.body)
      .then(function (dbBuilding) {
        return db.User.findOneAndUpdate({ _id: req.params.userid }, { $push: { entries: dbBuilding._id } }, { new: true });
      })
      .then(function (dbUser) {
        res.json(dbUser);
        console.log(dbUser)
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  },
  finduser: function (req, res) {
    db.User.find({ username: req.body.username })
      // Specify that we want to populate the retrieved users with any associated buildings
      .populate("buildings")
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  update: function (req, res) {

    console.log("building id", req.body._id, "userid", req.params.userid);
    db.User.findOneAndUpdate({ _id: req.params.userid }, { $push: { entries: req.body._id } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  populateUserBuildings: function (req, res) {
    // Find all users
    db.User.find({_id: req.params.userid})
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("buildings")
      .then(function (dbUser) {
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbUser);
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });

  },
  findAllSavedBuilding: function (req, res) {

    console.log( "find all saved buildings" + req.params.buildingid );
    db.Building
      .findById({ _id: req.params.buildingid })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Building
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
