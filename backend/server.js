require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middleware Engine Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Initialize Database Connection
connectDB();

// API Base Endpoints Injection
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Catch-All Error Interceptor
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server executing deployment on port ${PORT}`));