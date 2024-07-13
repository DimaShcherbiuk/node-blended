import { Product } from "../db/models/Product.js";

export const getAllProductsFromDB = () => Product.find();

export const getProductByIdFormDB = (id) => Product.findById(id);

export const createProduct = (productData) => Product.create(productData);

export const deleteProduct = (id) => Product.findByIdAndDelete(id);
