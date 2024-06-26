const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    confirmPassword: { type: String },
    role: { type: String, default: "customer" },
    wallet: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },
      balance: { type: Number, ref: "Wallet", default: 0 },
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
