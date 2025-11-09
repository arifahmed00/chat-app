
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true ,unique:true},
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  refreshToken: String,
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);
