import Product from "../models/Product";

export const getAllProduct = async (req, res) => {
  try {
    const data = await Product.find({});
    return res.status(201).json({
      message: "Get All Product",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    return res.status(201).json({
      message: "Detail product: " + data.name,
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
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
