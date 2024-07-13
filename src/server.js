import express from "express";
import cors from "cors";

import { env } from "./utils/env.js";
import { getAllProducts, getProductById } from "./controllers/products.js";

const PORT = Number(env("PORT", "8000"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get('/products', getAllProducts)

  app.get('/products/:productId', getProductById)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
