import express from "express";
import cors from "cors";

import { env } from "./utils/env.js";
import { getAllProducts, getProductById } from "./controllers/products.js";
import { ctrlWrapper } from "./utils/ctrlWrapper.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const PORT = Number(env("PORT", "8000"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get('/products', ctrlWrapper(getAllProducts));

  app.get('/products/:productId', ctrlWrapper(getProductById));

  app.use("*", notFoundHandler);
  
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
