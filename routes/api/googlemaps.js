// const axios = require("axios");
// const router = require("express").Router();

// router.get("/googlemaps", (req, res) => {
//   axios
 
//     .get(`'"https://maps.googleapis.com/maps/api/geocode/json?" ${ area }, "&zoom=14&size=400x400&key=", ${ApiKey}'`)
//     .then(results => console.log(results))
//     .then(results => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// module.exports = router;


const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
router.route("/")
  .get(googleController.findAll);
  

 

module.exports = router;
