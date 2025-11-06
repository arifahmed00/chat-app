// routes/messages.js
const express = require("express");
const router = express.Router();
const Message = require("./Message.model");
const Conversation = require("../conversation/Conversation.model");
const User = require("../user/User.model");

// Send a message
router.post("/send", async (req, res) => {
  const { sender, receiver, text } = req.body;

  try {
    // Find conversation between the users
    let conversation = await Conversation.findOne({
      participants: { $all: [sender, receiver] },
    });

    // If no conversation exists, create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [sender, receiver],
      });
    }

    // Create the message
    const message = await Message.create({
      conversationId: conversation._id,
      sender,
      text,
    });

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all messages of a conversation
router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    }).populate("sender", "username");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
