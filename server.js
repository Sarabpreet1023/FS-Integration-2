const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Smartphone', price: 699 },
  { name: 'Headphones', price: 199 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
