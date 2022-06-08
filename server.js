const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT;
// const User = require("./models/userSchema");
// const Location = require("./models/locationSchema");
// const locations = require("./APIroutes/locationRoutes");
const cookieParser = require("cookie-parser");

connectDB();

const test = (URI) => {
  console.log(URI);
};

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://beach-buddy.herokuapp.com"],
  })
);
app.use(cookieParser());

app.use("/api/locations", require("./APIroutes/locationRoutes"));

app.use("/api/users", require("./APIroutes/userRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



app.listen(port, () => console.log(`Server started on port ${port}`));

