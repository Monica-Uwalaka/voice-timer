"use strict";

const express = require("express");
const router = new express.Router();

router.post("/", async function(req, res){
    console.log("req:",req.body)
})


module.exports = router;
