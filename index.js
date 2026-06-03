const express = require("express");

const app = express();

const PORT = 3000;

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Group 5 Product Inventory API!");
});

// Product Routes
app.use("/api/products", productRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});