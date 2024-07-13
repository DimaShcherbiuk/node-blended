import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  addProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
} from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getAllProducts));

productsRouter.get("/:productId", ctrlWrapper(getProductById));

productsRouter.post("/", ctrlWrapper(addProduct));

productsRouter.delete("/:productId", ctrlWrapper(deleteProductById));

export default productsRouter;
