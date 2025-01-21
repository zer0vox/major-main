const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const Product = require('./models/product');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes
app.use('/products', productRoutes);

// Default route to display homepage
app.get('/', async (req, res) => {
  try {
    const products = await Product.find();  // Retrieve products from DB
    res.render('index', { products: products });  // Pass products to the view
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});