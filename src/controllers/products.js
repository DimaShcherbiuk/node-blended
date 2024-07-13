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



// Створіть роут GET /products/:productId для отримання даних одного продукту по його ідентифікатору.
// Обробка цього роута має включати:
// Реєстрацію роута в файлі src/routers/products.js
// Опис контролера для цього роута в файлі src/controllers/products.js
// Створення сервісу в файлі src/services/products.js
// Якщо за переданим ідентифікатором продукт було знайдено, то відповідь сервера має містити об’єкт з наступними властивостями:
//    {
//        status: 200,
//        message: "Successfully found product with id {productId}!",
//        data: <об'єкт продукту>
//    }
// Додайте перевірку чи продукт за переданим ідентифікатором було знайдено. Якщо продукт не було знайдено, то поверніть відповідь зі сатусом 404 і наступним об’єктом:
//    {
//        message: "Product not found"
//    }