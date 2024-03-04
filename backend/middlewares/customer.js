const customerAccess = (access) => {
  return (req, res, next) => {
    const accessRole = req.body.role;
    if (access.includes(accessRole)) {
      next();
    } else {
      return res
        .status(401)
        .json({ message: "You don't have permission to access" });
    }
  };
};

module.exports = { customerAccess };
