const Transaction = require("../models/Transaction");

const createTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    return res.status(200).json({
      data: newTransaction,
      message: "Transaction created successfully",
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Something went wrong!!" });
  }
};

module.exports = { createTransaction };
