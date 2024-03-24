const router = require("express").Router();
const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
} = require("../controllers/transactions");

const authMiddleware = require("../middlewares/auth");

router.post("/new", authMiddleware, createTransaction);

router.get("/all", authMiddleware, getAllTransactions);

router.get("/:id", authMiddleware, getTransactionById);

module.exports = router;
