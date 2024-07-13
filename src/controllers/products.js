import {
  getAllProductsFromDB,
  getProductByIdFormDB,
  createProduct,
  deleteProduct,
} from "../services/products.js";

export async function getAllProducts(req, res) {
  const products = await getAllProductsFromDB();
  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
}

export async function getProductById(req, res) {
  const { productId } = req.params;
  const product = await getProductByIdFormDB(productId);
  if (!product) {
    res.status(404).json({
      message: "Product not found",
    });
  } else {
    res.json({
      status: 200,
      message: `Successfully found product with id ${productId}`,
      data: product,
    });
  }
}

export async function addProduct(req, res) {
  const product = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data: product,
  });
}

export async function deleteProductById(req, res) {
  const { productId } = req.params;
  const product = await deleteProduct(productId);
  if (!product) {
    res.status(404).json({
      message: "Product not found",
    });
  } else {
    res.sendStatus(204);
  }
}
