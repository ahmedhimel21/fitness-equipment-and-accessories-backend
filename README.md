# Fitness Hub Backend

[Live URL](https://fitness-hub-backend.vercel.app)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [postman collection](#postman-Collection)
- [Usage](#usage)

## Introduction

**Fitness Hub Backend** Welcome to the Fitness Hub Backend API! This project serves as the backend for an e-commerce platform, providing a RESTful API for managing products, categories, user accounts, orders, and more. The backend is built using Node.js, Express, MongoDB, and Mongoose, and it follows the MVC (Model-View-Controller) architectural pattern. This documentation will guide you through the setup, configuration, and usage of the API.

## Features

- **Environment Configuration**: Manage environment variables with dotenv.
- **Input Validation**: Robust input validation with Zod.
- **Database Integration**: Seamless integration with MongoDB using Mongoose.
- **Code Quality**: Enforced coding standards with ESLint and Prettier.

## Technologies Used

- **Backend**:

  - Node.js
  - Express.js
  - TypeScript

- **Database**:

  - MongoDB
  - Mongoose

- **Other Tools**:
  - Vercel (for hosting)
  - Git

## Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ahmedhimel21/fitness-equipment-and-accessories-backend
   ```
2. **Navigate to the project directory:**
   ```sh
   cd your-repo-name
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Set up environment variables:**
   ```
   Create a .env file in the root directory and add the necessary environment variables as shown in .env.example.
   ```
5. **Build the project:**
   ```sh
   npm run build
   ```
6. **Start the application in development mode:**
   ```sh
   npm run start:dev
   ```
7. **Open the application in your browser:**
   ```
   Go to http://localhost:5000
   ```

### Postman Collection

To facilitate testing and development, we provide a Postman collection that includes predefined requests. You Download this , and import it in your postman if you needed.:

- [Download Postman Collection](./fitness-accessories.postman_collection.json)

## Usage

To use the application, follow these steps:

1. **Database Operations**: Perform CRUD operations using the provided API endpoints.
