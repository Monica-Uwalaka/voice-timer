"use strict";
const openaiResult = require("../services/openaiTextInterpreter");
const express = require('express');
const router = new express.Router();


router.post("/", async function(req, res){
    console.log(typeof(req.body.transcript))
    openaiResult(req.body.transcript).then((result) => {
        console.log("req:",req.body, "res:", result)
        res.status(200).send({"body":req.body})
    }) 
})

module.exports = router

