const router = require("express").Router();

const { getCustomers, getCustomerById } = require("../controllers/customer");

const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, getCustomers);

router.get("/:id", authMiddleware, getCustomerById);

module.exports = router;
