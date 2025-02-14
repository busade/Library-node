const express = requre("express");

const libControl = require("../controllers/controller.js");

const libRouter =express.Router();
libRouter.get('/',(res,req)=>{
    console.log("welcome to the homepage")
});


module.exports = libRouter
