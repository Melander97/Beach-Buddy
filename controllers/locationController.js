// CRUD-functions for user locations
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Location = require("../models/locationSchema");
const User = require("../models/userSchema");

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
  const location = await Location.findById(req.body.location_id);

  try {
    if (!location) {
    return res.status(400).json({ message: "No location found" });
    }

    const user = await User.findById(req.user.id);

    //Check for user
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Make sure the logged in user matches the user with the set location
    if (location.user.toString() !== user.id) {
      return res.status(401).json({ message: "User not authorized" });
    }

    await location.remove();

    res.status(200).json({ id: req.params.id });

  } catch (error) {
    return res.status(500).json({ message: `Server error ${error}` });
  }
};

// End of Delete location

// Update location
exports.updateLocation = async (req, res) => {
  const location = await Location.findById(req.body.location_id);

  try {
    if (!location) {
      return res.status(400).json({
        status: false,
        message: "No location found",
        data: null,
      });
    /* } else {
      // User id ska skickas från frontend och jämföras med location id
      const user = await User.findById(req.user.id);

      //Check for user (ev mot JWT)
      if (!user) {
        res.status(401); 
        return res.status(401).json({ message: "User not found" });
      }
      //Make sure the logged in user matches the user with the set location
      if (location.user_id.toString() !== user.id) {
        return res.status(401).json({ message: "User not authorized" });
      } */

      const updatedLocation = await Location.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        status: true,
        message: "Location updated successfully",
        data: updatedLocation,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error}` });
  }
};
// End of Update location



//Get location by id

exports.getLocationById = async (req, res) => {
  const location = await Location.findById(req.body.location_id);
  console.log(req.location_id);
  try {
    if (location === null) {
      return res.status(400).json({
        status: false,
        message: "could not find specified location",
        data: undefined,
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Fetched location",
        data: location,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error}` });
  }
};

//Get location by id end
