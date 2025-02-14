const mongoose = require("mongoose");


const AuthorSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    bio:{
        type: String, // a brief biography of the author
    },
    birthdate:{
        type: Date,
    },
    nationality:{
        type: String
    }
})

const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author;

