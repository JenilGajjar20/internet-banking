const Customer = require("../models/Customer");
const Wallet = require("../models/Wallet");

const createWallet = async (req, res) => {
  try {
    const customerId = req.body.customer.id;
    // const customerEmail = req.body.customer.email;

    const customer = await Customer.findById(customerId);
    // console.log("customer: ", customer);
    // Check if the customer exists
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // const existingWallet = await Wallet.findOne({
    //   customer: { id: req.body.customer.id },
    // });
    console.log("c_id: ", req.body.customer.id);
    // Check if the customer has already created a wallet
    // if (existingWallet) {
    //   return res.status(400).json({ message: "Customer already has a wallet" });
    // }

    // Creating a new wallet
    // const newWallet = await Wallet({
    //   customer: { id: customerId, email: customerEmail },
    //   balance: 0,
    // });
    // console.log("newWallet: ", newWallet);

    // const saveWallet = await newWallet.save();

    // return res
    //   .status(201)
    //   .json({ data: saveWallet, message: "Wallet created successfully" });
  } catch (err) {
    console.log("error", err);
    // return res
    //   .status(500)
    //   .json({ error: err, message: "Oops! Something went wrong" });
  }
};

// const getWalletData = async (req, res) => {
//   try {
//     // const walletData = await Wallet.findById({});
//     console.log("Wallet data: ", req);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// };

module.exports = { createWallet };
