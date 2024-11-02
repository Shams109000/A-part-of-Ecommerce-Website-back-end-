const Category = require("../model/category");

exports.createCategory = async (req, res) => {
  console.log(req.body, "r");
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({ message: "Product created successfully", category });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getAllCategory = async (req, res) => {
    console.log(req.body, "r");
    try {
      const category = await Category.find();
      res.status(201).json({ message: "Product created successfully", category });
    } catch (err) {
      console.error("Error creating product:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
