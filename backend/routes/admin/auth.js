const router = require("express").Router();

const { adminRegister, adminLogin } = require("../../controllers/admin");

router.post("/register", adminRegister);

router.post("/login", adminLogin);

module.exports = router;
