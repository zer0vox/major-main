const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    attributes: { type: [String], required: true } // Array of attributes for filtering
});

module.exports = mongoose.model('Product', productSchema);