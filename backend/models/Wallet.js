const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    c_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    c_email: {
      type: String,
      required: true,
    },
    balance: { type: Number, default: 0 },
    currency: { type: String, default: "INR" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);
