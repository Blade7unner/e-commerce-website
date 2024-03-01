
# E-Commerce Back End

## Description

This project is the back end of an e-commerce website, providing a robust API for managing categories, products, and tags. It utilizes Sequelize ORM to interact with a MySQL database, allowing for efficient storage and retrieval of data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Videos](#walkthrough-videos)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/e-commerce-backend.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd e-commerce-backend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up your MySQL database:**

   - Create a `.env` file in the root directory.
   - Add your MySQL username, password, and database name to the `.env` file:

     ```plaintext
     DB_USER=yourusername
     DB_PASSWORD=yourpassword
     DB_NAME=ecommerce_db
     ```

5. **Seed the database:**

   ```bash
   npm run seed
   ```

6. **Start the server:**

   ```bash
   npm start
   ```

## Usage

- Test the API routes using a tool like Insomnia.
- Perform CRUD operations on categories, products, and tags.
- Use the provided Sequelize models to interact with the database programmatically.
- Customize and extend the project as needed for your specific e-commerce application.

## Walkthrough Videos

- **MySQL Shell Walkthrough Video:** [View Video](https://drive.google.com/file/d/1VTVdrhzwDx1BRr9EuWom2kCt-Mt67fYA/view?usp=sharing)
- **API Tests Walkthrough Video:** [View Video](https://drive.google.com/file/d/1HnaVaHqKhLgELIYVZosPZHMnGzsNFYRr/view?usp=sharing)
