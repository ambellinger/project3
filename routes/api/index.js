const router = require("express").Router();
const buildingRoutes = require("./buildings");

router.use("/buildings", buildingRoutes);
router.use("/saved", buildingRoutes)
router.use("/new", buildingRoutes)
//  routes
// router.use("/input", buildingRoutes);

module.exports = router;

