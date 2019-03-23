const router = require("express").Router();
const buildingRoutes = require("./buildings");

const userRoutes = require("./user");

router.use("/buildings", buildingRoutes);
router.use("/saved", buildingRoutes);
router.use("/new", buildingRoutes);
router.use("/signup",userRoutes);
//  routes
// router.use("/input", buildingRoutes);

module.exports = router;
