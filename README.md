# E-Commerce Back End

## Description

This project is the back end of an e-commerce website, providing a robust API for managing categories, products, and tags. It utilizes Sequelize ORM to interact with a MySQL database, allowing for efficient storage and retrieval of data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/e-commerce-backend.git

Navigate to the project directory: cd e-commerce-backend

Install dependencies: npm install

Set up your MySQL database:

Create a .env file in the root directory.

Add your MySQL username, password, and database name to the .env file: 

DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=ecommerce_db

Seed the database: npm run seed

Start the server: npm start

Usage
Test the API routes using a tool like Insomnia Core or Postman.
Perform CRUD operations on categories, products, and tags.
Use the provided Sequelize models to interact with the database programmatically.
Customize and extend the project as needed for your specific e-commerce application.

