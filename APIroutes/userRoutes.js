// Routes for users

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const {protect} = require('../middlewares/authMiddleware')

router.post('/', registerUser);
router.post('/login', protect, loginUser);

module.exports = router;
