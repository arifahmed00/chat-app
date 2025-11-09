const express = require('express');
const router = express.Router();
const {startConversation,getUserConversations}= require('./conversation.controller')

router.post('/start', startConversation);
router.get('/:username', getUserConversations);

module.exports = router;
