import Product from "../models/Product";

export const getAllProduct = async (req, res) => {
  try {
    const data = Product.find();
    return res.status(201).json({
      message: "Get All Product",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDetailProduct = (req, res) => {
  res.send("Product detail");
  console.log("Product detail: " + req.params.id);
};

export const createProduct = async (req, res) => {
  try {
    const data = await Product(req.body).save();
    return res.status(201).json({
      message: "Add product successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = (req, res) => {
  res.send("Update product");
  console.log("Update product: " + req.params.id);
};

export const deleteProduct = (req, res) => {
  res.send("Delete product");
  console.log("Delete product: " + req.params.id);
};
