const router = require("express").Router();

const { createWallet } = require("../controllers/wallet");

const authMiddleware = require("../middlewares/auth");

router.post("/new", authMiddleware, createWallet);

module.exports = router;
