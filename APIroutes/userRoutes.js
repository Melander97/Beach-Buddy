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
router.delete("/delete/:id", protect, deleteUserById);
<<<<<<< HEAD
=======
router.patch('/update/:id', protect, updateUser);

>>>>>>> development

module.exports = router;
