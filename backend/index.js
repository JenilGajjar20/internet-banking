const express = require("express");

// Creating a app
const app = express();
app.use(express.json());

// Define the port
const port = 3001;

const db = require("./db/index");
db;

// Customer Routes
const customerAuthRoute = require("./routes/customer/auth");
const customerRoute = require("./routes/customer/index");
app.use("/api/auth", customerAuthRoute);
app.use("/api/customers", customerRoute);

// Admin Routes
const adminAuthRoute = require("./routes/admin/auth");
const adminRoute = require("./routes/admin/index");
app.use("/api/auth/admin", adminAuthRoute);
app.use("/api/admins", adminRoute);

// Transaction Route
const transactionRoute = require("./routes/transactions");
app.use("/api/transactions", transactionRoute);

// Wallet Routes
const walletRoute = require("./routes/wallet");
app.use("/api/wallet", walletRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
