const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const secretKey = "u@dgjuvncsk%hfj&#$Ggkhig!"; // Change this to a secure secret key

app.use(bodyParser.json());
app.use(cors());

const users = [];
const tasks = [];

// Register Endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).send("User already exists");
  }
  users.push({ username, password });
  res.status(201).send("User registered");
});

// Login Endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).send("Invalid credentials");
  }
  const token = jwt.sign({ username }, secretKey);
  res.json({ token });
});

// Get all users (for checking purpose only)
app.get('/users', (req, res) => {
  res.json(users);
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const newTask = { name: req.body.name };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
