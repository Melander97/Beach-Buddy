
const express = require("express");
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware')
const { addLocation, getLocation } = require("../controllers/locationController");



router.route('/').get(getLocation).post(addLocation);




// router.post('/addLocation', (req, res) => {
//     res.send('Hello')
// });

module.exports = router
