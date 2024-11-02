const Brand = require("../model/brand");

exports.createBrand = async (req, res) => {
  console.log(req.body, "r");
  try {
    const brand = new Brand(req.body);
    await brand.save();
    res.status(201).json({ message: "Product created successfully", brand });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getAllBrand = async (req, res) => {
    console.log(req.body, "r");
    try {
      const brand = await Brand.find();
      res.status(201).json({ message: "Product created successfully", brand });
    } catch (err) {
      console.error("Error creating product:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
