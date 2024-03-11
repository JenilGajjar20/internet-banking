const router = require("express").Router();

const { customerRegister, customerLogin } = require("../controllers/customer");

router.post("/register", customerRegister);

router.post("/login", customerLogin);

module.exports = router;
