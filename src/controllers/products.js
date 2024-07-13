import { getAllProductsFromDB } from "../services/products.js";


export async function getAllProducts(req, res) {
    const products = await getAllProductsFromDB()
    res.json({
        status: 200,
        message: "Successfully found products!",
        data: products,
    });
}

