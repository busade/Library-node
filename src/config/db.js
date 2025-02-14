const mongoose = require ("mongoose")
const dotenv = require("dotenv")       

dotenv.config()
const url =`mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@cluster0.xwb0u.mongodb.net/bookLibrary?retryWrites=true&w=majority&appName=Cluster0`

const connectToDB= async ()=>{
    try{
        await mongoose.connect(url);
        console.log("Database connected successfully")
    }
    catch (err){
        console.log(err);
    }
}

module.exports = connectToDB;