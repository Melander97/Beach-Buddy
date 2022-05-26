// Routes for users

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
  deleteUserById,
  logoutUser,

} = require("../controllers/userController");
const {protect} = require('../middlewares/authMiddleware')

router.post('/', registerUser);
router.post('/login',loginUser);
router.get('/logout', protect, logoutUser);
router.get("/:id", protect, getUserById);
router.delete("/delete/:id", protect, deleteUserById);

module.exports = router;
