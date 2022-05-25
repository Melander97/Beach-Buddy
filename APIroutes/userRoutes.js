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
router.get("/user/:id", protect, getUserById);
router.delete("/delete/:id", protect, deleteUserById);
router.get('/logout', protect, logoutUser);

module.exports = router;
