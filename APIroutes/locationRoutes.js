
const express = require("express");
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware')
const { addLocation, getLocation, deleteLocation } = require("../controllers/locationController");


router.route('/').get(getLocation)
router.route('/').post(addLocation)
router.route("/:id").delete(deleteLocation);


module.exports = router;
