const router = require("express").Router();

const {
  getCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
} = require("../controllers/customer");

const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, getCustomers);

router.get("/:id", authMiddleware, getCustomerById);

router.put("/:id", authMiddleware, updateCustomerById);

router.delete("/:id", authMiddleware, deleteCustomerById);

module.exports = router;
