const mongoose = require("mongoose");


const memberSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    memberId:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    contactNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    membershipStartDate:{
        type: Date,
        default: Date.now()
    }
})

const Member = mongoose.model("Member", memberSchema);

module.exports=Member;