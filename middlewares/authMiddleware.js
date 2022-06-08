const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res.status(401).json({
        success: false,
        message: "Please log in or register",
      });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {

    res.clearCookie("jwt");
    return res.status(400).json({
      success: false,
      message: "Please log in",
    });
  }
});
module.exports = { protect };
