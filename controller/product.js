const Product = require("../model/Product");

exports.createProduct = async (req, res) => {
  console.log(req.body, "r");
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    if (req.query.category) {
      const category = req.query.category;
      console.log(category);
      const product = await Product.find({ category: {$in:category} });
      res.send(product);
    }
    else if (req.query.brand) {
      const brand = req.query.brand;
      console.log(brand);
      const product = await Product.find({ brand: brand });
      res.send(product);
    }
    else if (req.query.sort && req.query.order) {
      const sort = {};
      sort[req.query.sort] = req.query.order === "asc" ? 1 : -1;
      console.log(sort, "..........");
      const products = await Product.find().sort(sort);
      res.send(products);
    
    } 
    else if(req.query.pages ){
      const page = parseInt(req.query.pages) || 1;
      const limit = 10;
      const skip = (page - 1) * limit;
      const products=await Product.find().skip(skip).limit(limit)
      res.send(products)
    }
    else if(req.query.rating){
      let rating=req.query.rating
      const products= await Product.find({rating:{$gt:rating}})
      res.send(products)
    }
    else {
      const allProduct = await Product.find();
      console.log(allProduct, "allProduct");
      res.status(200).json(allProduct);
    }
  } catch (err) {
    console.error("Error fetching all products:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(product, "product");
    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.filterProduct = async (req, res) => {};
