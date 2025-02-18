const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const productsPerPage = 6; // Number of products per page
    const page = parseInt(req.query.page) || 1; // Get the current page, default to 1

    // Fetch total product count for pagination
    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Fetch only the required products using `.skip()` and `.limit()`
    const products = await Product.find()
      .skip((page - 1) * productsPerPage)
      .limit(productsPerPage);

    res.render('index', {
      products,
      currentPage: page,
      totalPages
    });
  } catch (err) {
    res.status(500).send(err);
  }
});


// Filter products based on content-based filtering
router.get('/filter', async (req, res) => {
  const { query } = req.query;
  const productsPerPage = 6; // Number of products per page
  const page = parseInt(req.query.page) || 1;

  try {
    // Fetch all products from the database
    let products = await Product.find();

    // Apply content-based filtering
    products = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.attributes.some(attr => attr.toLowerCase().includes(query.toLowerCase()))
      );
    });

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Slice products for pagination
    const paginatedProducts = products.slice((page - 1) * productsPerPage, page * productsPerPage);

    res.render('index', {
      products: paginatedProducts,
      currentPage: page,
      totalPages,
      query // Keep query in pagination links
    });
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;