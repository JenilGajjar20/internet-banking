const express = require("express");

// Routes
const itemRoutes = require("./routes/items");

// Creating a app
const app = express();

// Define the port
const port = 3000;

app.use("/items", itemRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
