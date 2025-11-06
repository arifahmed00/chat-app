const express = require('express');
const router = express.Router();
const ctrl = require('./conversation.Controller')
router.post('/start', ctrl.startConversation);
router.get('/:username', ctrl.getUserConversations);

module.exports = router;
