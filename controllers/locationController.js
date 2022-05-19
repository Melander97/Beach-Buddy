// CRUD-functions for user locations
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Location = require("../models/locationSchema");
const User = require("../models/userSchema");

// Get locations
exports.getLocation = async (req, res, next) => {
  try {
    const locations = await Location.find(req._id);
    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations,
    });
  } catch (err) {
    console.error(err);
    {
      res.status(500).json({ error: "Server error" });
    }
  }
};
//end of get locations

// Add location
exports.addLocation = async (req, res, next) => {
  try {
    const location = await Location.create(req.body);

    return res.status(201).json({
      success: true,
      data: location,
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "This location already exists" });
    }
    res.status(500).json({ error: "Server error" });
  }
};
//end of add locations

// Delete location

exports.deleteLocation = async (req, res) => {
  const location = await Location.findById(req.params.id);

  if (!location) {
    res.status(400);
    throw new Error("No location found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matcher the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await location.remove();

  res.status(200).json({ id: req.params.id });
};

// End of Delete location

// Update location

exports.updateLocation = async (req, res) => {
  /* const id = req.params.id.toString();
  console.log(id); */
  const location = await Location.findById(req.body.location_id);
  // Used if sent by body
  // const location = await Location.findById(req.body.location_id);

  if (!location) {
    return res.status(400).json({
      status: false,
      message: "No location found",
      data: null,
    });
    // throw new Error("No location found");
  }

  // User id ska skickas från frontend och jämföras med location id
  /* const user = await User.findById(req.user.id);

  //Check for user (ev mot JWT)
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (location.user_id.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  } */

  const updatedLocation = await Location.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedLocation);
};

// End of Update location
