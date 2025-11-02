// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const UserSchema = new Schema({
//   username: { type: String, required: true, unique: true }
// }, { timestamps: true });

// module.exports = mongoose.model('User', UserSchema);



const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);
