const Location = require("./locationSchema");

// Schema for users
const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

//register
const userSchema = new mongoose.Schema(
  {
    // _id: new mongoose.Types.ObjectId(),
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

/* Location.find({ userId: User._id })
  .populate("locations")
  .exec((err, item) => {
    if (err) return err;
    consol.log(item);
  }); */

// fire a function to hash the password before saving to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);
//register end
