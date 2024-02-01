const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// Middleware to enable CORS
app.use(cors());
app.use(express.json());

let data = [
  {
    id: 1,
    name: "Hari Bhandari",
    photo:
      "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
    department: "Business",
    description:
      "A strategic thinker and business enthusiast, Hari leads initiatives that drive growth and innovation within the organization.",
  },
  {
    id: 2,
    name: "Tilak Sharma",
    photo:
      "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
    department: "Transport",
    description:
      "With a focus on efficient logistics, Tilak ensures seamless transportation operations, optimizing routes and enhancing delivery processes.",
  },
  {
    id: 3,
    name: "Sara Khan",
    photo:
      "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
    department: "Marketing",
    description:
      "Sara is a creative force in the Marketing department, crafting compelling campaigns and strategies that elevate the brand and engage audiences.",
  },
  {
    id: 4,
    name: "Alex Johnson",
    photo:
      "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
    department: "IT",
    description:
      "A tech guru, Alex is at the forefront of innovation, implementing cutting-edge solutions to keep the organization's IT infrastructure robust and secure.",
  },
  {
    id: 5,
    name: "Emma Davis",
    photo:
      "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
    department: "Finance",
    description:
      "A professional Finance Role player, Emma's expertise ensures meticulous financial management, contributing to the organization's fiscal success.",
  },
  {
    id: 6,
    name: "Raj Patel",
    photo:
      "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
    department: "Human Resources",
    description:
      "Raj excels in fostering a positive work environment, handling HR matters with empathy and efficiency to support the well-being of the organization's greatest asset – its people.",
  },
  {
    id: 7,
    name: "Lily Chen",
    photo:
      "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
    department: "Research and Development",
    description:
      "At the forefront of innovation, Lily drives research and development initiatives, pushing boundaries to bring groundbreaking solutions that shape the future of the organization.",
  },
];

// Get all items
app.get("/members", (req, res) => {
  res.json(data);
});

// Get a specific item by ID
app.get("/member/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// Add a new item
app.post("/members", (req, res) => {
  const newItem = req.body;
  const sortedData = data.sort((a, b) => a - b);
  const newMember = {
    id: sortedData[sortedData.length - 1].id + 1,
    ...newItem,
  };
  data.push(newMember);
  res.status(201).json(newMember);
});

// Update an existing item by ID
app.put("/member/:id", (req, res) => {
  const id = req.params.id;
  const { updatedData } = req.body;
  const index = data.findIndex(
    (item) => parseInt(item.id, 10) === parseInt(id, 10)
  );
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedData };
    res.json(data[index]);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// Delete an item by ID
app.delete("/member/:id", (req, res) => {
  const idToDelete = req.params.id;
  const newdata = data.filter(
    (item) => parseInt(item.id, 10) !== parseInt(idToDelete, 10)
  );
  data = newdata;
  res.json({ message: "Item deleted successfully", newdata });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
