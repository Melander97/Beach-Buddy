const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      validate: [isEmail, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "Please add an password"],
      minlength: [6, "Minimum password length is 6 characters"],
    },
    locations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
