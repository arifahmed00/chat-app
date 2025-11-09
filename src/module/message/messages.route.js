const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require('./messages.controller.js');

router.post("/send", sendMessage);
router.get("/:conversationId", getMessages);

module.exports = router;



