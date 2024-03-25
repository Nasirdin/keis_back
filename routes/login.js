const express = require("express");
const userModel = require("../models/login");
const jwt = require("jsonwebtoken");

const router = express.Router();

const { secret } = {
  secret: "SECRET_KEY_RANDOM",
};

const generateAccessToken = (userName) => {
  const payload = {
    userName,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid  password" });
    }
    const token = generateAccessToken(username);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
