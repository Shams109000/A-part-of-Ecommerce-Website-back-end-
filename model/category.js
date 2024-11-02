const mongoose = require("mongoose");
const { Schema } = mongoose;


const categorySchema=new Schema({
    value:String,
    label:String
})
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;