const mongoose = require("mongoose");

const BankingDetailsSchema = new mongoose.Schema({});

module.exports = mongoose.model("banking-detail", BankingDetailsSchema);
