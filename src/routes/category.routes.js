import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getDetailCategory,
  updateCategory,
} from "../controllers/CategoryController";

const router = express.Router();

router.get("/categories", getAllCategory);

router.get("/categories/:id", getDetailCategory);

router.post("/categories", createCategory);

router.put("/categories/:id", updateCategory);

router.delete("/categories/:id", deleteCategory);

export default router;
