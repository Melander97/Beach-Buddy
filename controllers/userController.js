const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");

const maxAge = 3 * 24 * 60 * 60;
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const registerUser = async (req, res) => {
  let { name, email, password } = req.body;

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
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
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

const updateUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (req.body.name !== "") {
    user.name = req.body.name;
  }
  if (req.body.email !== "") {
    user.email = req.body.email;
  }

  try {
    const updatedUser = await user.save();

    return res.status(200).json({
      success: true,
      message: "updated successfully",
      data: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
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
