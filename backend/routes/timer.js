"use strict";
const express = require('express');
const router = new express.Router();
const Timer = require("../models/timer.js");

router.post("/start", async function(req, res){
    let {hour, minute, second} = req.body
    hour = parseInt(hour);
    minute = parseInt(minute)
    second = parseInt(second);

    const timer = new Timer(hour, minute, second)
    timer.start()
    console.log("req:",req.body)
    return res.json({ timer })
})


module.exports = router;

