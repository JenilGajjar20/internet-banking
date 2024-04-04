const Customer = require("../models/Customer");
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

    await Customer.findByIdAndUpdate(
      req.body.sender.s_id,
      {
        $push: { transactions: saveTransaction._id },
      },
      { new: true }
    );

    newTransaction.status = "pending";
    await newTransaction.save();

    setTimeout(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const transaction = await Transaction.findById(newTransaction._id);

      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }

      if (transaction.amount >= "100" || transaction.amount <= "500000") {
        transaction.status = "completed";
      } else {
        transaction.status = "failed";
      }
      await transaction.save();
    }, 5000);

    return res.status(201).json({ data: saveTransaction });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Something went wrong!!" });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      "sender.s_id": req.user.customer_id,
    });
    if (!transactions || transactions.length === 0) {
      return res
        .status(404)
        .json({ message: "You haven't made any transaction yet!" });
    }
    return res.status(200).json({ data: transactions });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Error fetching transactions" });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction && transaction.id != req.params.id) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    return res.status(200).json({ data: transaction });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Error fetching the transaction" });
  }
};

module.exports = { createTransaction, getAllTransactions, getTransactionById };
