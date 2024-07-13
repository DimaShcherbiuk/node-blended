
import { Product } from "../db/models/Product.js";

export const getAllProductsFromDB = () => Product.find()
