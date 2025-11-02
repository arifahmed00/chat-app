const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { conversationId, sender, text } = req.body;
  if (!conversationId || !sender || !text) {
    return res.status(400).json({ error: "conversationId, sender, and text are required" });
  }

  try {
    const message = await Message.create({ conversationId, sender, text });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  const { conversationId } = req.params;
  try {
    const messages = await Message.find({ conversationId });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
