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

router.get("/getLocation", protect, getLocation);
router.post("/addLocation", protect, addLocation);
router.patch("/updateLocation", protect, updateLocation);
router.post("/delete", deleteLocation);

router.get("/getLocationById", protect, getLocationById);

module.exports = router;
