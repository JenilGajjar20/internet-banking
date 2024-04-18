// const Customer = require("../models/Customer");
const Wallet = require("../models/Wallet");

const createWallet = async (req, res) => {
  try {
    const newWallet = await Wallet({
      c_id: req.body.id,
      c_email: req.body.email,
    });

    // Check if the wallet already exists
    if (newWallet.c_id.toString() === req.body.id) {
      return res
        .status(400)
        .json({ message: "You have already created a Wallet." });
    }

    // Save the new wallet
    const wallet = newWallet.save();

    return res
      .status(201)
      .json({ data: wallet, message: "Wallet created successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Oops! Something went wrong" });
  }
};

const getWalletByCustomerId = async (req, res) => {
  try {
    const walletData = await Wallet.findOne({
      c_id: req.user.customer_id,
    });

    // Check if the wallet is not found
    if (walletData.c_id.toString() !== req.user.customer_id) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    return res.status(200).json({ data: walletData });
  } catch (err) {
    return res.status(500).json({ message: "Oops! Something went wrong" });
  }
};

const updateWalletBalance = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ c_id: req.body.c_id });

    // Check if wallet is not found
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Check if the balance is less than 100 and more than 40,000
    if (req.body.balance <= 100 || req.body.balance >= 40000) {
      return res
        .status(401)
        .json({ message: "You can add amount between 100 and 40000" });
    }

    // Check if the email address is valid
    if (wallet.c_email !== req.body.c_email) {
      return res.status(401).json({ message: "Invalid email address" });
    }

    // Update the wallet balance
    wallet.balance += req.body.balance;

    // Save the updated wallet
    await wallet.save();

    return res
      .status(200)
      .json({ data: wallet, message: "Wallet balance updated" });
  } catch (err) {
    return res.status(500).json({ message: "Oops! Something went wrong" });
  }
};

module.exports = { createWallet, getWalletByCustomerId, updateWalletBalance };
