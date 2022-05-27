// Schema for locations// Schema for users
const mongoose = require("mongoose");

//register
const LocationSchema = new mongoose.Schema({
  userId: {
    type: String,
    /* type: mongoose.Schema.Types.ObjectId,
      ref: 'User', */
    required: true,
  },
  adress: {
    type: String,
    required: [true, "Please add an adress"],
  },

  coordinates: {
    type: Array,
    required: true,
  },

  formattedAdress: String,

  description: {
    type: String,
    required: [true, "Please add a short description"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Location", LocationSchema);
