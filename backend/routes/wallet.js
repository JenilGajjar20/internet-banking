const router = require("express").Router();

const { createWallet, getWalletData } = require("../controllers/wallet");

const authMiddleware = require("../middlewares/auth");

router.post("/new", authMiddleware, createWallet);

// router.get("/:id", authMiddleware, getWalletData);

module.exports = router;
