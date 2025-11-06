
const User = require('../user/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { ACCESS_TOKEN_EXPIRES_IN,JWT_SECRET } = require('../config/envConfig');

// REGISTER
exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.create({ username, password, role });
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Invalid password' });

    const accessToken = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    );
    const refreshToken = jwt.sign(
    { userId: user._id },
    JWT_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
    )
    user.refreshToken = refreshToken;
    await user.save()
    res.json({ accessToken,refreshToken });
}

exports.getAllUser = async () => {
  return await User.find();
};