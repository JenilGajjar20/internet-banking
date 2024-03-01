const express = require("express");
const router = express.Router();
const { v4 } = require("uuid");

let itemData = [];

router.get("/", (req, res) => {
  res.json(itemData);
});

router.post("/", (req, res) => {
  const item = req.body;
  itemData.push({ ...item, id: v4() });
  res.send(`User has been created successfully.`);
});

module.exports = router;
