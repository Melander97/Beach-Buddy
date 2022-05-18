
const express = require("express");
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware')
const { addLocation, getLocation, getLocationById } = require("../controllers/locationController");


router.get('/getlocation', getLocation)
router.post('/addlocation', addLocation)


router.route('/').get(getLocationById)

module.exports = router;

