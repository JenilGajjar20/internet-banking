const router = require("express").Router();

const { adminRegister, adminLogin } = require("../controllers/admin");

// Middleware
const { adminAccess } = require("../middlewares/admin");

router.post("/register", adminAccess(["admin"]), adminRegister);

router.post("/login", adminAccess(["admin"]), adminLogin);

module.exports = router;
