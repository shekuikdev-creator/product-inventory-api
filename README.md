## Product Inventory API

A simple RESTful API built with Node.js and Express.js for managing a product inventory using in-memory storage.

## Features
```
Create a new product
Get all products
Get a single product by ID
Update product (PATCH only)
Delete product
JSON-based API responses
```

## Technologies Used
```
Node.js
Express.js
JavaScript
Nodemon
Postman (for testing)
Git & GitHub
```

## Contributors

| Name | Role |
|------|------|
| Tsungirirai Machingura | Developer |
| Sheku Ishmael Kamara  | Developer |


## Project Structure

```text
product-inventory-api/
│
├── controllers/
│   └── productController.js
│
├── models/
│   └── product.js
│
├── routes/
│   └── productRoutes.js
│
├── index.js
├── package.json
└── README.md
```
## API Endpoints

| Method | Endpoint | Function |
|---------|----------|----------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get one product |
| POST | `/api/products` | Create product |
| PATCH | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |


## Installation & Setup
1. Clone the repository

    git clone https://github.com/shekuikdev-creator/product-inventory-api.git

2. Navigate into the project
```
   cd product-inventory-api
```
3. Run Project

   #Install dependencies

```bash
  npm install
  ```
4. Start development server
 ```
  npm run dev
```
## Server runs on:

http://localhost:3000

## API Deployment 
  https://product-inventory-api-45ym.onrender.com/api/products


