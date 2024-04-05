const router = require("express").Router();

const {
  createWallet,
  getWalletByCustomerId,
  updateWalletBalance,
} = require("../controllers/wallet");

const authMiddleware = require("../middlewares/auth");

router.post("/new", authMiddleware, createWallet);

router.get("/:id", authMiddleware, getWalletByCustomerId);

router.put("/:id", authMiddleware, updateWalletBalance);

module.exports = router;
