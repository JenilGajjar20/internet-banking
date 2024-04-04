const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    customer: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    balance: {
      type: Number,
      default: 0,
      required: true,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);
