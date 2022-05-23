// Auth-middleware

const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');

const protect = asyncHandler(async (req, res, next) => {
  // Read the token from the cookie
  const token = req.cookies.jwt;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Please log in or register",
    });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    // console.log("err", er);
    //Incase of expired jwt or invalid token kill the token and clear the cookie
    res.clearCookie("jwt");
    return res.status(400).json({
      success: false,
      message: "Please log in"
    });
  }
});
module.exports = { protect }
