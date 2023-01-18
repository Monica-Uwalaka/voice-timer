"use strict";  

const express = require("express");
const app = express()
const cors = require("cors");
const convertRoutes = require("./routes/convert");

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.use("/convert", convertRoutes);


module.exports = app;
