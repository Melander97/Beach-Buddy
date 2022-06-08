// CRUD-functions for user locations
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Location = require("../models/locationSchema");
const User = require("../models/userSchema");

// Get locations
getLocation = async (req, res, next) => {
  try {
    const locations = await Location.find();
    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + err,
    });
  }
};
//end of get locations

// Add location
addLocation = async (req, res, next) => {
  try {
    const location = await new Location({
      userId: req.body.userId,
      adress: req.body.adress,
      description: req.body.description,
      title: req.body.title,
      coordinates: req.body.coordinates,
    });
    console.log(location);
    location.save().then((location) => {
      User.updateOne(
        { _id: req.user.id },
        { $push: { locations: location._id } },
        () => {
          res.json({
            success: true,
            message: "location added",
            data: location,
          });
        }
      );
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        error: "This location already exists",
      });
    }
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

//end of add locations

// Delete location

deleteLocation = async (req, res) => {
  const location = await Location.findById(req.params.id);
  // console.log(req.params.id);
  // console.log("location", location);
  const user = await User.findById(location.userId);
  // console.log("user", user);
  // console.log(req.body.user_id);

  try {
    if (!location) {
      return res.status(400).json({
        success: false,
        message: "No location found",
        data: null,
      });
    }

    //Check for user
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    // Make sure the logged in user matches the user with the set location
    /* console.log(`location user${location.userId} user if ${user._id}`); */
    if (location.userId.toString() !== user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
        data: null,
      });
    }
    // console.log("LocationController", req.body.id )

    // await location.remove();
    await Location.deleteOne({ _id: req.params.id }).then((loc) => {
      User.updateOne(
        { _id: user._id },
        { $pull: { locations: location._id } },
        () => {
          return res.json({
            success: true,
            message: "location removed",
            data: location,
          });
        }
      );
    });

    /* res.status(200).json({
      success: true,
      message: "Location deleted",
      data: location,
    }); */
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
      data: null,
    });
  }
};

// End of Delete location

// Update location
updateLocation = async (req, res) => {
  const location = await Location.findById(req.body.id);

  const user = await User.findById(req.body.userId);
  console.log(req.body.user_id);

  if (req.body.title != null) {
    location.title = req.body.title;
  }
  if (req.body.adress != null) {
    location.adress = req.body.adress;
  }
  if (req.body.directions != null) {
    location.description = req.body.directions;
  }
  try {
    const updatedLocation = await location.save();
    return res.status(200).json({
      success: true,
      message: "updated successfully",
      data: updatedLocation,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
      data: null,
    });
  }
};


getLocationById = async (req, res) => {
  const location = await Location.findById(req.params.id);
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


module.exports = {
  getLocation,
  addLocation,
  updateLocation,
  getLocationById,
  deleteLocation,
};
