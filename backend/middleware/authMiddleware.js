const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  try {
    console.log("========== AUTH ==========");
    console.log("Headers:", req.headers.authorization);

    let token = req.headers.authorization;

    if (!token) {
      console.log("No token received");
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided.",
      });
    }

    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    console.log("Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};