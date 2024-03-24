const router = require("express").Router();
const { createTransaction } = require("../controllers/transactions");

router.post("/", createTransaction);

module.exports = router;
