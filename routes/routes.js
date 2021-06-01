// Import express
import express from "express";
// Import Controller Product
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } from "../controllers/product.js";

 import { 
    createTransactionToRedis,
    ShowCartItemFromRedis,
    createTransactionRedisToDatabase,
    updateStatusTransaction
 } from "../controllers/transaction.js";
 
 // Init express router
const router = express.Router();
 
// Route show all product
router.get('/products', getProducts);
// Route show product by id
router.get('/products/:id', getProductById);
// Route create new product
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);
 
// Route Add to Cart (create Redis data)
router.post('/add-to-cart', createTransactionToRedis);
// Route Show Cart Item (show from Redis data)
router.post('/show-cart-item', ShowCartItemFromRedis);
// Route Checkout (save data from Redis to DB)
router.post('/checkout', createTransactionRedisToDatabase);
// Route update status transaction
router.post('/payment-status', updateStatusTransaction);

// export router
export default router;