const express = require("express");

// Creating a app
const app = express();
app.use(express.json());

// Define the port
const port = 3001;

const db = require("./db/index");
db;

// Customer Routes
const customerAuthRoute = require("./routes/customer-auth");
const customerRoute = require("./routes/customer");
app.use("/api/auth", customerAuthRoute);
app.use("/api/customers", customerRoute);

// Admin Routes
const adminAuthRoute = require("./routes/admin-auth");
app.use("/api/auth/admin", adminAuthRoute);

const adminRoute = require("./routes/admin");
app.use("/api/admins", adminRoute);

// Transaction Route
const transactionRoute = require("./routes/transactions");
app.use("/api/transactions", transactionRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
