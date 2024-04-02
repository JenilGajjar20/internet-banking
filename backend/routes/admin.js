const router = require("express").Router();

const { getAdminById, updateAdminById } = require("../controllers/admin");

const authMiddleware = require("../middlewares/auth");

router.get("/:id", authMiddleware, getAdminById);

// router.put("/:id", authMiddleware, updateAdminById);

module.exports = router;
