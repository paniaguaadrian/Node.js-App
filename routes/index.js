const express = require("express");
const router = express.Router();

// @desc    Login/Landing page
// @route   GET request /
router.get("/", (req, res) => {
  res.render("login", { layout: "login" });
});

// @desc    Dashboard
// @route   GET request /dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
