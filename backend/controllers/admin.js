const bcrypt = require("bcrypt");

// Admin Model
const Admin = require("../models/Admin");

const adminRegister = async (req, res) => {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const createAdmin = new Admin({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      confirmPassword: hashedPass,
    });

    const admin = await createAdmin.save();
    return res
      .status(200)
      .json({ data: admin, message: "Admin Registered successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "username or email already exist!!" });
    }
    return res.status(500).json(err);
  }
};

const adminLogin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    !admin && res.status(400).json("Invalid Username! Try Again.");

    const adminEmail = await Admin.findOne({ email: req.body.email });
    !adminEmail && res.status(400).json("Invalid Email! Try Again.");

    const validate = await bcrypt.compare(req.body.password, admin.password);
    !validate && res.status(400).json("Invalid Password! Try Again.");

    const { password, confirmPassword, ...others } = admin._doc;
    return res
      .status(200)
      .json({ data: others, message: "Logged in successfully" });
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  adminRegister,
  adminLogin,
};
