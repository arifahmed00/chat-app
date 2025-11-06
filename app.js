require('dotenv').config();
const express = require('express')
const router = express.Router();
const userRoutes = require('./src/module/user/users.route');
const conversationRoutes = require('./src/module/conversation/conversations.route');
const messageRoutes = require('./src/module/message/messages.route');


// Routes
router.use('/api/users', userRoutes);
router.use('/api/conversations', conversationRoutes);
router.use('/api/messages', messageRoutes);

module.exports = router