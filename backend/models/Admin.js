const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
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
    role: { type: String, default: "admin", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin", adminSchema);
