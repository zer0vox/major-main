const mongoose = require('mongoose');
const Product = require('./models/product'); // Adjust the path as necessary

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    return Product.deleteMany({}); // Clear existing products
  })
  .then(() => {
    // Create an array of product data
    const products = [
      {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 89.99,
        imageUrl: "./public/img.jpg",
        attributes: ["wireless", "noise cancellation", "over-ear"]
      },
      {
        name: "Smartphone",
        description: "Latest model smartphone with a stunning display.",
        price: 699.99,
        imageUrl: "https://example.com/images/smartphone.jpg",
        attributes: ["smartphone", "touchscreen", "high resolution"]
      },
      {
        name: "Laptop",
        description: "Powerful laptop for gaming and productivity.",
        price: 1299.99,
        imageUrl: "https://example.com/images/laptop.jpg",
        attributes: ["laptop", "gaming", "high performance"]
      },
      {
        name: "Smartwatch",
        description: "Stylish smartwatch with fitness tracking features.",
        price: 199.99,
        imageUrl: "https://example.com/images/smartwatch.jpg",
        attributes: ["smartwatch", "fitness tracking", "water resistant"]
      },
      {
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with excellent sound quality.",
        price: 49.99,
        imageUrl: "https://example.com/images/speaker.jpg",
        attributes: ["Bluetooth", "portable", "high quality"]
      },
      {
        name: "4K TV",
        description: "Ultra HD 4K television with smart features.",
        price: 799.99,
        imageUrl: "https://example.com/images/tv.jpg",
        attributes: ["4K", "smart TV", "HDR"]
      }
    ];

    // Insert the products into the database
    return Product.insertMany(products);
  })
  .then(() => {
    console.log("Products inserted successfully");
    return mongoose.disconnect(); // Disconnect from the database
  })
  .catch(err => {
    console.error("Error inserting products:", err);
  });