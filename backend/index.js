const express = require("express");

// Creating a app
const app = express();

const db = require("./db/index");
db;

// Customer Routes
const customerAuthRoute = require("./routes/customer-auth");
const customerRoute = require("./routes/customer");

// Admin Routes
const adminAuthRoute = require("./routes/admin-auth");

app.use(express.json());

// Define the port
const port = 3001;

app.use("/api/auth", customerAuthRoute);
app.use("/api/customers", customerRoute);

app.use("/api/auth/admin", adminAuthRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
