const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Filter products based on content-based filtering
router.get('/filter', async (req, res) => {
  const { query } = req.query; // Get query parameter for filtering
  try {
    // Fetch all products from DB
    const products = await Product.find();

    // Content-based filtering logic
    const filteredProducts = products.filter((product) => {
      // Check if the product's name, description, or attributes contain the query
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.attributes.some(attr => attr.toLowerCase().includes(query.toLowerCase()))
      );
    });

    res.render('index', { products: filteredProducts });  // Pass filtered products to the view
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;