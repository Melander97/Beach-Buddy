// CRUD-functions for users
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");

// Generate JWT token
const maxAge = 3 * 24 * 60 * 60; // expires in 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

// register user
// @route POST api/users
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all fields",
      data: null,
    });
  }

  // check if user exist
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
      data: null,
    });
  }

  //Create user
  try {
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    return res.status(201).json({
      success: true,
      message: "User created",
      data: {
        name: user.name,
        email: user.email,
        id: user._id,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//Login
//@route POST api/users/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //Check whether user exists with given email
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({
      success: false,
      message: "The given email is not registered",
    });

  //Check if password entered is correct
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });

  //generate the jwt token on successful login
  const token = generateToken(user._id);
  res.cookie("jwt", token, { httpOnly: true });
  res.status(200).json({
    success: true,
    message: "Successfully logged in",
    data: {
      name: user.name,
      email: user.email,
      id: user._id,
      token: token,
    },
  });
};

// User profile
// @desc     Get user data
// @route    GET api/users/:id
// @access   Private
const getUserById = async (req, res) => {
  try {
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      data: {
        id: _id,
        name,
        email,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not get user id",
      data: null,
    });
  }
};

// delete user
// @route DELETE /api/users/delete/:id
// @access   Private
const deleteUserById = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Could not delete user",
    });
  }
};

//logout user
// @route GET /api/users/logout
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to log out",
      data: null,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
  deleteUserById,
  logoutUser,
};
