const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
  deleteUserById,
  logoutUser,
  updateUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/logout", protect, logoutUser);
router.post("/delete/:id", protect, deleteUserById);
router.patch("/update/:id", protect, updateUser);
router.get("/:id", protect, getUserById);

module.exports = router;
