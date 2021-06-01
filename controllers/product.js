// Import model Product
import Product from "../models/product.js";
 
// Get All data product
export const getProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}
 
// Get product based on id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create new product
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update product based on id
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product based on id
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}