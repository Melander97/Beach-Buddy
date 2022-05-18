const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");

const cors = require("cors");
const port = process.env.PORT;
const User = require('./models/userSchema')
const Location = require('./models/locationSchema')

const bcrypt = require('bcryptjs')
const locations = require('./APIroutes/locationRoutes');


connectDB();

const test = (URI) => {
  console.log(URI);
};

const app = express();

app.use(express.json());
app.use(cors());


app.listen(port, () => console.log(`Server started on port ${port}`));


app.use('/api/users', require('./APIroutes/userRoutes'))

//denna fungerar men skulle vilja slå ihop dessa routes 
app.use('/api/locations/getLocation', require('./APIroutes/locationRoutes'))
app.use('/api/locations/addLocation', require('./APIroutes/locationRoutes'))




