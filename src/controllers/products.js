import { getAllProductsFromDB, getProductByIdFormDB } from "../services/products.js";


export async function getAllProducts(req, res) {
    const products = await getAllProductsFromDB()
    res.json({
        status: 200,
        message: "Successfully found products!",
        data: products,
    });
}

export async function getProductById(req, res) {
    const {productId} = req.params;
 const product = await getProductByIdFormDB(productId)
 if(!product) {
    res.status(404).json({
        message: "Product not found"
    })
 } else {
    res.json({
        status: 200,
        message: `Successfully found product with id ${productId}`,
        data: product,
    })
 }
}

