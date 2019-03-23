const router = require("express").Router();
const BldgController = require("../../controllers/BldgController");

// Matches with "/api/books"
router.route("/")
// "this route is working"
  .get(BldgController.findAll)
  .post(BldgController.create);

  // router.route("/saved")
  // .get(BldgController.findAll)

  // router.route("/new")
  //   .get(BldgController.create)
// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(BldgController.findById)
  // .put(booksController.update)
  .delete(BldgController.remove)
  .post(BldgController.create);

  

module.exports = router;