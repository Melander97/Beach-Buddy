
const express = require("express");
const router = express.Router();
const { addLocation } = require("../controllers/locationController");
const {protect} = require('../middlewares/authMiddleware')


router.route('/').post(addLocation);

// router.post('/addLocation', (req, res) => {
//     res.send('Hello')
// });

module.exports = router;
