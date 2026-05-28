const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is mandatory']
  },
  email: {
    type: String,
    required: [true, 'Email field is mandatory'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password field is mandatory']
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);