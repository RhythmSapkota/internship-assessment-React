const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Middleware to enable CORS
app.use(cors());
app.use(express.json());

// Sample data (replace this with your database)
let data = [
    {
      id: "1",
      name: "Hari Bhandari",
      photo: "",
      department: "Business"
    },
    {
      id: "2",
      name: "Tilak Sharma",
      photo: "",
      department: "Transport"
    },
    {
      id: "3",
      name: "Sara Khan",
      photo: "",
      department: "Marketing"
    },
    {
      id: "4",
      name: "Alex Johnson",
      photo: "",
      department: "IT"
    },
    {
      id: "5",
      name: "Emma Davis",
      photo: "",
      department: "Finance"
    },
    {
      id: "6",
      name: "Raj Patel",
      photo: "",
      department: "Human Resources"
    },
    {
      id: "7",
      name: "Lily Chen",
      photo: "",
      department: "Research and Development"
    }
  ]
  ;

// Get all items
app.get('/members', (req, res) => {
  res.json(data);
});

// Get a specific item by ID
app.get('/member/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Add a new item
app.post('/members', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item by ID
app.put('/member/:id', (req, res) => {
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
app.delete('/member/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter((item) => item.id !== id);
  res.json({ message: 'Item deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
