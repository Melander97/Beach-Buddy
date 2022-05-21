// Schema for locations// Schema for users
const mongoose = require("mongoose");

//register
const LocationSchema = new mongoose.Schema(
  {
    locationId: {
      type: String,
      required: [true, "Please add the name of the location"],
      unique: true,
      trim: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    adress: {
      type: String,
      required: [true, 'Please add an adress']
    },

    coordinates: {
      lat: '',
      long: ''
    },

    formattedAdress: String,
    
    description: {
      type: String,
      required: [true, "Please add a short description"],
    },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Location", LocationSchema);
