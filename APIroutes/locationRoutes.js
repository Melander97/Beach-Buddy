const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  addLocation,
  getLocation,
  deleteLocation,
  updateLocation,
  getLocationById,
} = require("../controllers/locationController");

router.route("/").get(getLocation);
router.route("/").post(addLocation);
router.route("/:id").delete(deleteLocation);
router.route("/:id").put(updateLocation);

router.get("/getLocationById", protect, getLocationById);

module.exports = router;
