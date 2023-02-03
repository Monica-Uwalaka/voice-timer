"use strict";  

const express = require('express');
const cors = require('cors')
const interpretSpeechRoutes =  require('./routes/interpretSpeech');
const timerRoutes = require('./routes/timer');

const app = express();

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/timer", timerRoutes);
app.use("/interpretSpeech", interpretSpeechRoutes);

module.exports = app

