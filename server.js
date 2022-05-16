const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const port = process.env.PORT;
const User = require('./models/userSchema')
const bcrypt = require('bcryptjs')



connectDB();

const test = (URI) => {
  console.log(URI);
};

const app = express();

app.use(express.json());
app.use(cors());


app.listen(port, () => console.log(`Server started on port ${port}`));

app.use('/api/users', require('./APIroutes/userRoutes'))

// APIroutes/userRoutes
