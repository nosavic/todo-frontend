const express = require("express");
const router = express.Router();
const axios = require("axios");

const BASE_API_URL = "http://localhost:5000/api"; // Backend URL

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.get("/tasks", async (req, res) => {
  try {
    const token = req.cookies.token;
    const response = await axios.get(`${BASE_API_URL}/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    res.render("tasks/tasks", { tasks: response.data });
  } catch (error) {
    res.redirect("/login");
  }
});

module.exports = router;
