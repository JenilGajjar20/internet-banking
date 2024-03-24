const Transaction = require("../models/Transaction");

const createTransaction = async (req, res) => {
  try {
    const {
      transactionType,
      amount,
      currency,
      sender: { s_id, s_username, s_email },
      recipient: { r_id },
      description,
      transactionMethod,
      category,
    } = req.body;

    if (
      !transactionType ||
      !amount ||
      !currency ||
      !s_id ||
      !s_username ||
      !s_email ||
      !r_id
    ) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const newTransaction = new Transaction({
      transactionType,
      amount,
      currency,
      sender: { s_id, s_username, s_email },
      recipient: { r_id },
      description,
      transactionMethod,
      category,
    });

    const saveTransaction = await newTransaction.save();
    return res.status(201).json({ data: saveTransaction });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Something went wrong!!" });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found" });
    }
    return res.status(200).json({ data: transactions });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Error fetching transactions" });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    return res.status(200).json({ data: transaction });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Error fetching the transaction" });
  }
};

module.exports = { createTransaction, getAllTransactions, getTransactionById };
