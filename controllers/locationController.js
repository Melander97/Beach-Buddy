// CRUD-functions for user locations
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Location = require("../models/locationSchema");

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
  console.log(req.params.id);

  if (!location) {
    res.status(400);
    throw new Error("No location found");
  }

  await location.remove();

  res.status(200).json({ id: req.params.id });
};

// End of Delete location

// Update location

exports.updateLocation = async (req, res)

// End of Update location
