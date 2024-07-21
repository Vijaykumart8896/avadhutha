const jwt = require("jsonwebtoken");

const generateToken = id => {
  return jwt.sign({ id }, "vijay", { expiresIn: "20d" });
};

module.exports = generateToken;
