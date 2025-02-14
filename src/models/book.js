const mongoose = require("mongoose")


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        trim :true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Authors",
        required: true,

    },
    isbn:{
        type: String,
        required: true,
        unique: true
    },
    genre:{
        type:[String], //aray of string of multiple genre
        required: true
    },
    publicationYear:{
        type: Number,
        required: true,
        min: 1000,//minimum date for publication year
        max: new Date().getFullYear() // optional
    },
    publisher:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    quantityAvailabe:{
        type: Number,
        default:0,
        min:0 //quantity can not be negative
    },
    addedDate:{
        type: Date,
        default: Date.now
    }

});
const Book= mongoose.model("Book",BookSchema);
module.exports=Book;