const jwt = require("jsonwebtoken");
const Location = require("../models/locationSchema");
const User = require("../models/userSchema");

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

addLocation = async (req, res, next) => {
  try {
    const location = await new Location({
      userId: req.body.userId,
      adress: req.body.adress,
      description: req.body.description,
      title: req.body.title,
      coordinates: req.body.coordinates,
    });
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


deleteLocation = async (req, res) => {
  const location = await Location.findById(req.params.id);

  const user = await User.findById(location.userId);

  try {
    if (!location) {
      return res.status(400).json({
        success: false,
        message: "No location found",
        data: null,
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

  
    if (location.userId.toString() !== user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
        data: null,
      });
    }
   
    // await Location.deleteOne({ _id: req.params.id });

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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
      data: null,
    });
  }
};

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
