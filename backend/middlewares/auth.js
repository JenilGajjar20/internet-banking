const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  try {
    const token = bearerToken.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;

    // if (req.user.role != "admin") {
    //   return res
    //     .status(403)
    //     .json({ message: "Unauthorized: Only admins are allowed" });
    // }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
