const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/googleMaps"
router.route("/")
  .get(googleController.findAll);
  

 

module.exports = router;
