const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const port = process.env.PORT;

// connectDB();

const test = (URI) => {
  console.log(URI);
};

const app = express();

app.use(express.json());
app.use(cors());

/* app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes")); */

app.listen(port, () => test(process.env.MONGO_URI));

// console.log(`Server started on port ${port}`)
