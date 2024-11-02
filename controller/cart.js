const Cart = require("../model/cart");

exports.addToCart = async (req, res) => {
  console.log(req.body, "r");
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).json({ message: "added successfully", cartItem });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getCartItem = async (req, res) => {
    console.log(req.body, "r");
    try {
      const cartItem = await Cart.find().populate("user").populate("product");
      res.status(201).json({ message: "added successfully", cartItem });
    } catch (err) {
      console.error("Error creating cartItem:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };