const author_lib = require("../models/author.j");
const book_loan_lib = require("../models/book_loan.js");
const book_lib = require("../models/book.js")
const category_lib= require("../models/category.js")
const member_lib = require("../models/members.js")


exports.getAllBooks = async(req,res)=>{
    try{
        const allBooks = await book_lib.find({d})
    }
}