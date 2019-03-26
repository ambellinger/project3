const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")

  .post(userController.create);


  // Matches with "/api/books"
router.route("/:login")
// "this route is working"
//  .get(userController.findUser)
 .post(userController.findUser);


  

module.exports = router;
