const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  transactionType: {
    type: String,
    required: true,
  },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  date: { type: Date, default: Date.now },
  sender: {
    s_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    s_username: { type: String, required: true },
    s_email: { type: String, required: true },
  },
  recipient: {
    r_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
  description: { type: String },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  transactionFee: { type: Number },
  referenceNumber: { type: String },
  transactionMethod: { type: String },
  category: { type: String },
});

module.exports = mongoose.model("Transaction", transactionSchema);
