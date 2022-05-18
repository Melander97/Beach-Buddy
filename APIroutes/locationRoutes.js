
const express = require("express");
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware')
const { addLocation, getLocation } = require("../controllers/locationController");


router.get('/getlocation', getLocation)
router.post('/addlocation', addLocation)

module.exports = router;

