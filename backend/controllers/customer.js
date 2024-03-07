const bcrypt = require("bcrypt");

// Customer Model
const Customer = require("../models/Customer");

const customerRegister = async (req, res) => {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newCustomer = new Customer({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const customer = await newCustomer.save();
    return res
      .status(200)
      .json({ data: customer, message: "Registered successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "username or email already exist!!" });
    }
    return res.status(500).json(err);
  }
};

const customerLogin = async (req, res) => {
  try {
    const customer = await Customer.findOne({ username: req.body.username });
    // !customer && res.status(400).json("Invalid Username! Try Again.");

    const customerEmail = await Customer.findOne({ email: req.body.email });
    !customerEmail && res.status(400).json("Invalid Email! Try Again.");

    const validate = await bcrypt.compare(
      req.body.password,
      customerEmail.password
    );
    !validate && res.status(400).json("Invalid Password! Try Again.");

    const { password, confirmPassword, ...others } = customer._doc;
    return res
      .status(200)
      .json({ data: others, message: "Logged in successfully" });
  } catch (err) {
    return res.status(400).json(err);
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.status(200).json({ data: customers });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { customerRegister, customerLogin, getCustomers };
