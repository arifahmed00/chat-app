
const express = require('express')
const router = express.Router();
const userRoutes = require('./src/module/user/user.route');
const conversationRoutes = require('./src/module/conversation/conversation.route');
const messageRoutes = require('./src/module/message/message.route');


router.use('/user', userRoutes);
router.use('/conversations', conversationRoutes);
router.use('/messages', messageRoutes);

module.exports = router

