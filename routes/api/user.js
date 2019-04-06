const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")


// Matches with "/api/books"
router.route("/:signup")

  .post(userController.create);


// Matches with "/api/books"
router.route("/")
  // "this route is working"
  .post(userController.findUser);

router.route("/check/:validate")
  .post(userController.checkusername)

module.exports = router;
