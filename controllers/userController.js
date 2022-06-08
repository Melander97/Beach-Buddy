const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
// const Location = require("../models/locationSchema");
// const { cookie } = require("express/lib/response");
// const { db } = require("../models/userSchema");

const maxAge = 3 * 24 * 60 * 60; // expires in 3 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};


const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all fields",
      data: null,
    });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
      data: null,
    });
  }

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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({
      success: false,
      message: "The given email is not registered",
    });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });

  try {
    const token = generateToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = User.find({ _id: req.params.id })
      .populate("locations")
      .then((location) => {
        return res.status(200).json({ user: location });
      })
      .catch((error) => console.log(error));
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not get user id",
      data: null,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({
      success: result.acknowledged,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Could not delete user" + error,
    });
  }
};


const logoutUser = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(202).json({
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


updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log("ID" + user)

  if (
    req.body.email != null && email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
  ) {
    updatedData["email"] = req.body.email;
  } else {
    return res.status(400).json({
      success: false,
      message: "Email not valid",
      data: null,
    });
  }

  if (req.body.password != null && req.body.password.length >= 6) {
    const salt = await bcrypt.genSalt();
    updatedData["password"] = await bcrypt.hash(req.body.password, salt);
  } else {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters",
      data: null,
    });
  }

  try {

    const result = await User.findByIdAndUpdate(id, updatedData, options);

    return res.status(200).json({
      success: true,
      message: "Sucessfully updated!",
      data: {
        name: result.name,
        email: result.email,
        password: result.password,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error.message}`,
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
  updateUser,
};
