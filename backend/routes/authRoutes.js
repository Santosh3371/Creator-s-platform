const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // placeholder logic
  res.json({ message: 'register', name, email });
});

router.post('/login', async (req, res) => {
  const { email } = req.body;
  // placeholder logic
  const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secret');
  res.json({ token });
});

module.exports = router;
