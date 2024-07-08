import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
} from "../controllers/ProductController";

const router = express.Router();

router.get("/products", getAllProduct);

router.get("/products/:id", getDetailProduct);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;
