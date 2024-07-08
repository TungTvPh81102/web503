export const getAllProduct = (req, res) => {
  res.send("Get all products");
  console.log("Get all products");
};

export const getDetailProduct = (req, res) => {
  res.send("Product detail");
  console.log("Product detail: " + req.params.id);
};

export const createProduct = (req, res) => {
  res.send("Add product successfully");
  console.log(req.body);
};

export const updateProduct = (req, res) => {
  res.send("Update product");
  console.log("Update product: " + req.params.id);
};

export const deleteProduct = (req, res) => {
  res.send("Delete product");
  console.log("Delete product: " + req.params.id);
};
