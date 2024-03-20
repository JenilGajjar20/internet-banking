const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    return res
      .status(500)
      .json({ error: err, message: "Oops! Something went wrong" });
  }
};

const customerLogin = async (req, res) => {
  try {
    const customerEmail = await Customer.findOne({ email: req.body.email });
    !customerEmail && res.status(400).json({ message: "Email does not exist" });

    const validate = await bcrypt.compare(
      req.body.password,
      customerEmail.password
    );
    !validate &&
      res.status(400).json({ message: "Invalid Password! Try Again." });

    const token = jwt.sign(
      { customer_id: customerEmail._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    const { password, ...others } = customerEmail._doc;

    return res
      .status(200)
      .json({ token: token, data: others, message: "Logged in successfully" });
  } catch (err) {
    console.log("error", err);
    return res
      .status(400)
      .json({ error: err, message: "Oops! Something went wrong." });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.status(200).json({ data: customers });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Oops! Something went wrong." });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    return res.status(200).json({ data: customer });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Oops! Something went wrong." });
  }
};

module.exports = {
  customerRegister,
  customerLogin,
  getCustomers,
  getCustomerById,
};
