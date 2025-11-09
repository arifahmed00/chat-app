
const express = require('express')
const router = express.Router();
const userRoutes = require('./src/module/user/users.route');
const conversationRoutes = require('./src/module/conversation/conversations.route');
const messageRoutes = require('./src/module/message/messages.route');


// Routes
router.use('/users', userRoutes);
router.use('/conversations', conversationRoutes);
router.use('/messages', messageRoutes);

module.exports = router

