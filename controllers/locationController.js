// CRUD-functions for user locations
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Location = require("../models/locationSchema");

// Get locations
exports.getLocation = async (req, res, next) => {
  try {
    const locations = await Location.find();
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
  };
}
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






















//Get location by id

exports.getLocationById = async (req, res) => {
  const location = await Location.findById(req.body.location_id);
  console.log(req.location_id);
  try {
    if(location === null) {
      return res.status(400).json({
        status: false,
        message: "could not find specified location",
        data: undefined
      })
    } else {
      return res.status(200).json({
        status: true,
        message: "Fetched location",
        data: location
      })
    }
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error}`})
  }

  

  
}

//Get location by id end