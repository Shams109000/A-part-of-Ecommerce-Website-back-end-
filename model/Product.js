const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0.1, "price must be grater than 0"],
    max: [10000, "max price"],
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: [0, "min discount"],
    max: [99, "max discount"],
  },
  rating: {
    type: Number,
    required: true,
    min: [1, "min rating"],
    max: [5, "max rating"],
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "min stock"],
    default: 0,
  },
  brand: {
    type: String,
    required: true,
    default:"N/A"
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
