const mongoose = require('mongoose');
const Product = require('./models/product'); // Adjust the path as necessary

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    return Product.deleteMany({}); // Clear existing products
  })
  .then(() => {
    // Create an array of Nepali consumer goods
    const products = [
      { name: "Wai Wai Noodles", description: "Popular instant noodles loved across Nepal.", price: 25, imageUrl: "/waiwai.png", attributes: ["instant", "spicy", "quick meal"] },
      { name: "Rumpum Noodles", description: "Delicious Nepali noodles with a unique taste.", price: 30, imageUrl: "/rumpum.png", attributes: ["instant", "spicy", "flavored"] },
      { name: "Mayos Noodles", description: "Another favorite Nepali instant noodle brand.", price: 25, imageUrl: "/mayos.png", attributes: ["quick meal", "spicy", "delicious"] },
      { name: "Milk Biscuit", description: "Healthy biscuits with a rich taste of milk.", price: 50, imageUrl: "/milkbiscuit.png", attributes: ["nutritious", "light", "tea-time snack"] },
      { name: "Digestive Biscuit", description: "Fiber-rich biscuits for a healthy diet.", price: 60, imageUrl: "/digestivebiscuit.png", attributes: ["fiber-rich", "healthy", "crunchy"] },
      { name: "Tata Salt", description: "Iodized salt for a healthier lifestyle.", price: 40, imageUrl: "/tatasalt.png", attributes: ["iodized", "essential", "pure"] },
      { name: "Himalayan Pink Salt", description: "Rich in minerals and pure Himalayan rock salt.", price: 90, imageUrl: "/himalayansalt.png", attributes: ["natural", "healthy", "pure"] },
      { name: "Everest Masala", description: "Authentic spice blend for Nepali cooking.", price: 120, imageUrl: "/everestmasala.png", attributes: ["spicy", "aromatic", "traditional"] },
      { name: "MDH Garam Masala", description: "Perfect blend of spices for rich flavors.", price: 150, imageUrl: "/mdhmasala.png", attributes: ["aromatic", "flavorful", "premium"] },
      { name: "Fortune Sunflower Oil", description: "Light and healthy cooking oil.", price: 300, imageUrl: "/fortuneoil.png", attributes: ["cholesterol-free", "healthy", "pure"] },
      { name: "Figaro Olive Oil", description: "Extra virgin olive oil for cooking and skincare.", price: 500, imageUrl: "/figarooliveoil.png", attributes: ["extra virgin", "healthy", "pure"] },
      { name: "Colgate Toothpaste", description: "Trusted toothpaste for strong and healthy teeth.", price: 120, imageUrl: "/colgate.png", attributes: ["whitening", "protection", "trusted"] },
      { name: "Pepsodent Toothpaste", description: "Best for cavity protection and fresh breath.", price: 110, imageUrl: "/pepsodent.png", attributes: ["cavity protection", "fresh breath", "strong teeth"] },
      { name: "Close-Up Gel Toothpaste", description: "Gives you a refreshing breath all day long.", price: 130, imageUrl: "/closeup.png", attributes: ["fresh breath", "gel", "whitening"] },
      { name: "Head & Shoulders Shampoo", description: "Anti-dandruff shampoo for healthy hair.", price: 250, imageUrl: "/headshoulders.png", attributes: ["anti-dandruff", "moisturizing", "fresh"] },
      { name: "Sunsilk Black Shine Shampoo", description: "Gives smooth and shiny black hair.", price: 280, imageUrl: "/sunsilk.png", attributes: ["black shine", "nourishing", "soft hair"] },
      { name: "Dove Shampoo", description: "For intense repair and damage-free hair.", price: 300, imageUrl: "/dove.png", attributes: ["damage repair", "moisturizing", "smooth"] },
      { name: "Lifebuoy Soap", description: "Germ protection soap for everyday use.", price: 50, imageUrl: "/lifebuoy.png", attributes: ["antibacterial", "refreshing", "trusted"] },
      { name: "Dettol Soap", description: "Trusted antiseptic soap for clean skin.", price: 55, imageUrl: "/dettol.png", attributes: ["antiseptic", "germ protection", "trusted"] },
      { name: "Patanjali Honey", description: "Organic honey with natural health benefits.", price: 300, imageUrl: "/patanjalihoney.png", attributes: ["organic", "pure", "healthy"] },
      { name: "Dabur Honey", description: "Best quality honey for immunity boosting.", price: 350, imageUrl: "/daburhoney.png", attributes: ["natural", "immunity", "pure"] }
    ];

    // Insert the products into the database
    return Product.insertMany(products);
  })
  .then(() => {
    console.log("Nepali consumer goods inserted successfully");
    return mongoose.disconnect(); // Disconnect from the database
  })
  .catch(err => {
    console.error("Error inserting products:", err);
  });