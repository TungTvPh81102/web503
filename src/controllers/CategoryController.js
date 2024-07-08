export const getAllCategory = (req, res) => {
  res.send("Get all categories");
  console.log("Get all categories");
};

export const getDetailCategory = (req, res) => {
  res.send("Categories detail");
  console.log("categories detail: " + req.params.id);
};

export const createCategory = (req, res) => {
  res.send("Add categories successfully");
  console.log(req.body);
};

export const updateCategory = (req, res) => {
  res.send("Update categories");
  console.log("Update categories: " + req.params.id);
};

export const deleteCategory = (req, res) => {
  res.send("Delete categories");
  console.log("Delete categories: " + req.params.id);
};
