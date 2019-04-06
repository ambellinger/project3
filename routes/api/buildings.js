const router = require("express").Router();
const BldgController = require("../../controllers/BldgController");

// Matches with "/api/buildings"

router
.route("/:list")
  .get(BldgController.findList)

router
.route("/")
  // "this route is working"
  .get(BldgController.findAll)
  .post(BldgController.create)

router
.route("/users/populateduser")
  .post(BldgController.finduser)

router
.route("/buildings/:userid")
  .put(BldgController.update)
  .get(BldgController.populateUserBuildings)


router
  .route("/neighborhood/:neighborhood")
  .get(BldgController.findByHood)
  // .put(booksController.update)
  .delete(BldgController.remove)
  .post(BldgController.create)

router
  .route("/savedview/:buildingid")
  .get(BldgController.findAllSavedBuilding);

module.exports = router;
