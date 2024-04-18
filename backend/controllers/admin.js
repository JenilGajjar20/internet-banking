const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    return res.status(500).json({ message: "Oops! Something went wrong" });
  }
};

const adminLogin = async (req, res) => {
  try {
    const adminEmail = await Admin.findOne({ email: req.body.email });
    !adminEmail &&
      res.status(400).json({ message: "Invalid Email! Try Again." });

    const validate = await bcrypt.compare(
      req.body.password,
      adminEmail.password
    );
    !validate &&
      res.status(400).json({ message: "Invalid Password! Try Again." });

    const adminToken = jwt.sign(
      { admin_id: adminEmail._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    const { password, ...others } = adminEmail._doc;
    return res.status(200).json({
      token: adminToken,
      data: others,
      message: "Logged in successfully",
    });
  } catch (err) {
    return res.status(400).json({ message: "Oops! Something went wrong" });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    return res.status(200).json({ data: admin });
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({ message: "Oops! Something went wrong" });
  }
};

const updateAdminById = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ email: req.body.email });

    // Check if the admin already exists
    if (existingAdmin && existingAdmin._id.toString() !== req.params.id) {
      return res
        .status(400)
        .json({ message: "You are not allowed to update this admin details" });
    }

    // Check if the password is updated
    if (req.body.password) {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPass;
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({
      data: updatedAdmin,
      message: `${updatedAdmin.username}, your details are updated successfully`,
    });
  } catch (err) {
    return res.status(500).json({ message: "Oops! Something went wrong" });
  }
};

module.exports = {
  adminRegister,
  adminLogin,
  getAdminById,
  updateAdminById,
};
