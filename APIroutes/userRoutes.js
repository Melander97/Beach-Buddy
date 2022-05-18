// Routes for users

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
} = require("../controllers/userController");
const {protect} = require('../middlewares/authMiddleware')

router.post('/', registerUser);
router.post('/login', protect, loginUser);
router.get("/:id", protect, getUserById);


module.exports = router;
