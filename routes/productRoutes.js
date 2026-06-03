const express = require("express");

const router = express.Router();

const {
    getProducts,
    getProductById,
    createProduct,
    patchProduct,
    deleteProduct
} = require("../controllers/productController");

// GET all products
router.get("/", getProducts);

// GET product by ID
router.get("/:id", getProductById);

// CREATE product
router.post("/", createProduct);

// PATCH product (Partial Update)
router.patch("/:id", patchProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;