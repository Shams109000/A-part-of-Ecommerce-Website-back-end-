const mongoose = require("mongoose");
const { Schema } = mongoose;


const brandSchema=new Schema({
    value:String,
    label:String
})
const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;