const router = require("express").Router();

const { customerRegister, customerLogin } = require("../controllers/customer");

// Middleware
const { customerAccess } = require("../middlewares/customer");

router.post("/register", customerAccess(["customer"]), customerRegister);

router.post("/login", customerAccess(["customer"]), customerLogin);

module.exports = router;
