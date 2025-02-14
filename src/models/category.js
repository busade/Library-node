const mongoose = require("mongoose")

const genreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:string
    }
})

const genre = new mongoose.model("Genre", genreSchema)

module.exports = genre