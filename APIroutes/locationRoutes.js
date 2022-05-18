
const express = require("express");
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware')
const { addLocation, getLocation } = require("../controllers/locationController");


router.route('/').get(getLocation)
router.route('/').post(addLocation)


module.exports = router;
