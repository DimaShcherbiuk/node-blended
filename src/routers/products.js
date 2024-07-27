import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import {
  addProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../controllers/products.js";

import {
  createProductSchema,
  updateProductSchema,
} from "../validation/createProductSchema.js";
import { isValidId } from "../middlewares/isValidId.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getAllProducts));

productsRouter.get("/:productId", isValidId, ctrlWrapper(getProductById));

productsRouter.post(
  "/",
  validateBody(createProductSchema),
  ctrlWrapper(addProduct)
);

productsRouter.delete("/:productId", isValidId, ctrlWrapper(deleteProductById));

productsRouter.patch(
  "/:productId",
  isValidId,
  validateBody(updateProductSchema),
  ctrlWrapper(updateProductById)
);

export default productsRouter;
