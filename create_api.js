// 1. Import the Express package we just installed
const express = require('express');

// 2. Initialize our Express application
const app = express();

// 3. Define the port number where our server will listen (localhost:3000)
const PORT = 3000;

// 4. Create a basic "Root" route just to test if the server is alive
app.get('/', (req, res) => {
    res.send('Welcome to the Group 5 Product Inventory API!');
});

// 5. Tell the server to start listening for requests
app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});