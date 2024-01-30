const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Middleware to enable CORS
app.use(cors());
app.use(express.json());

// Sample data (replace this with your database)
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Get all items
app.get('/items', (req, res) => {
  res.json(data);
});

// Get a specific item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Add a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedItem };
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter((item) => item.id !== id);
  res.json({ message: 'Item deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
