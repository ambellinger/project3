const router = require("express").Router();
const Controller = require("../../controllers/Controller.js");

// Matches with "/api/books"
router.route("/")
// "this route is working"
  .get(Controller.findAll)
  .post(Controller.create);
  router.route("/saved")
  .get(Controller.findAll)

  router.route("/new")
    .get(Controller.create)
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(Controller.findById)
  // .put(booksController.update)
  .delete(Controller.remove)
  .post(Controller.create);

  

module.exports = router;
