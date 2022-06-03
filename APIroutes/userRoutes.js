// Routes for users

const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
  deleteUserById,
  logoutUser,
  updateUser

} = require("../controllers/userController");
const {protect} = require('../middlewares/authMiddleware')

router.post('/', registerUser);
router.post('/login',loginUser);
router.get('/logout', protect, logoutUser);
router.get("/:id", protect, getUserById);
router.post("/delete/:id", protect, deleteUserById);
router.patch('/update/:id', protect, updateUser);


module.exports = router;
