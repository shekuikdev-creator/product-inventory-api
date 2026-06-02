const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to allow our API to read JSON data from requests
app.use(express.json());

// Our "In-Memory Database" starting with 2 sample items
let products = [
    { id: 1, name: "Laptop", description: "High performance gaming laptop", price: 1200, quantity: 10 },
    { id: 2, name: "Wireless Mouse", description: "Ergonomic 2.4GHz mouse", price: 25, quantity: 50 }
];

// 1. Root Route (Health Check)
app.get('/', (req, res) => {
    res.send('Welcome to the Group 5 Product Inventory API!');
});

// 2. GET ALL PRODUCTS (Read)
app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

// 3. GET A SINGLE PRODUCT BY ID (Read)
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
});

// 4. CREATE A NEW PRODUCT (Create)
app.post('/api/products', (req, res) => {
    const { name, description, price, quantity } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({ message: "Name and Price are required" });
    }

    const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name,
        description: description || "",
        price: Number(price),
        quantity: Number(quantity) || 0
    };

    products.push(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
});

// 5. UPDATE AN EXISTING PRODUCT (Update)
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const { name, description, price, quantity } = req.body;

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = Number(price);
    if (quantity) product.quantity = Number(quantity);

    res.status(200).json({ message: "Product updated successfully", product });
});

// 6. DELETE A PRODUCT (Delete)
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});