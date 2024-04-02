const router = require("express").Router();

const { getAdminById } = require("../controllers/admin");

const authMiddleware = require("../middlewares/auth");

router.get("/:id", authMiddleware, getAdminById);

module.exports = router;
