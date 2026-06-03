const products = require("../models/products");

// GET ALL PRODUCTS
const getProducts = (req, res) => {
    res.status(200).json(products);
};

// GET PRODUCT BY ID
const getProductById = (req, res) => {
    const productId = parseInt(req.params.id, 10);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found"});
    }

    res.status(200).json(product);
};

// CREATE PRODUCT
const createProduct = (req, res) => {
    const { name, description, price, quantity } = req.body;

    if (!name || !price) {
        return res.status(400).json({message: "Name and Price are required"});
    }

    const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name,
        description: description || "",
        price: Number(price),
        quantity: Number(quantity) || 0
    };

    products.push(newProduct);

    res.status(201).json({message: "Product added successfully",product: newProduct});
};

// PATCH PRODUCT (Partial Update)
const patchProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, description, price, quantity } = req.body;

    if (name !== undefined) {
        product.name = name;
    }

    if (description !== undefined) {
        product.description = description;
    }

    if (price !== undefined) {
        product.price = Number(price);
    }

    if (quantity !== undefined) {
        product.quantity = Number(quantity);
    }

    res.status(200).json({message: "Product patched successfully",product});
};

// DELETE PRODUCT
const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10);

    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({message: "Product not found"});
    }

    products.splice(productIndex, 1);

    res.status(200).json({message: "Product deleted successfully"});
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    patchProduct,
    deleteProduct
};