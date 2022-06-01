const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@clusterbeachbuddy.cgdvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
