const express = require("express");

// Creating a app
const app = express();

// Define the port
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});