const mongoose = require("mongoose")


const collectionSchema = new mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    member:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        required:true
    },
    loanDate:{
        type:Date,
        Default: Date.now
    },
    returnDate:{
        type:Date
    },
    returned:{
        type: Boolean,
        default: false
    }
    
})
const Book_loan = new mongoose.model("Collections",collectionSchema);

mmodule.export = Book_loan