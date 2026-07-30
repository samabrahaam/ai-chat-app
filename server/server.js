const express = require("express");
const cors = require("cors");
require("dotenv").config();

const chatRoutes = require("./routes/chat");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Register chat routes
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
