const Customer = require("../models/Customer");
const Wallet = require("../models/Wallet");

const createWallet = async (req, res) => {
  try {
    const { customerId } = req.body;

    const customer = await Customer.findById(customerId);
    // Check if the customer exists
    if (customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const existingWallet = await Wallet.findOne({ customer: customerId });
    // Check if the customer has already created a wallet
    if (existingWallet) {
      return res.status(400).json({ message: "Customer already has a wallet" });
    }

    // Creating a new wallet
    const newWallet = await Wallet({ customer: customerId, balance: 0 });

    const saveWallet = await newWallet.save();

    return res
      .status(201)
      .json({ data: saveWallet, message: "Wallet created successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Oops! Something went wrong" });
  }
};

module.exports = { createWallet };
