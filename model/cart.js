const mongoose = require("mongoose");
const { Schema } = mongoose;


const cartSchema = new Schema({
  product:{
    type:Schema.Types.ObjectId,
    ref:"Product"
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  quantity:{
    type:Number,default:1
  }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
