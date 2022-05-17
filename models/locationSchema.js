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
    adress: {
      type: String,
      requierd: [true, 'Please add an adress']
    },

    //enum is if using geojason points, the only valus allowed is Point, geojson point
  //   location: {
  //     type: String,
  //     enum: ['Point']
  //   },

  // inedx is 
    // coordinates: {
    //   type: [Number],
    //   index: '2dsphere'
    // },
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
