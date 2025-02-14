const express = require("express")
const dotenv = require("dotenv")
const  connectToDB = require("./src/config/db")

dotenv.config()
const app = express()
connectToDB();
const port = process.env.PORT;
app.listen(port, ()=>console.log("listening on port ", port))