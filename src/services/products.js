import { Product } from "../db/models/Product.js";
import { createPaginationInfo } from "../utils/createPaginationInfo.js";

export const getAllProductsFromDB = async (filter, page, perPage) => {
  const skip = perPage * (page - 1);

  const productsQuery = Product.find();
  if (filter.category) {
    productsQuery.where("category").equals(filter.category);
  }
  if (filter.minPrice) {
    productsQuery.where("price").gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productsQuery.where("price").lte(filter.maxPrice);
  }
  const [count, products] = await Promise.all([
    Product.find().merge(productsQuery).countDocuments(),
    Product.find().merge(productsQuery).skip(skip).limit(perPage).exec(),
  ]);
  const paginationInfo = createPaginationInfo(page, perPage, count);
  return {
    products,
    ...paginationInfo,
  };
};

export const getProductByIdFormDB = (id) => Product.findById(id);

export const createProduct = (productData) => Product.create(productData);

export const deleteProduct = (id) => Product.findByIdAndDelete(id);

export const updateProduct = (id, productData) =>
  Product.findByIdAndUpdate(id, productData, { new: true });
