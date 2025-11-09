const {
  sendMessageService,
  getMessagesService,
} = require('./message.service');

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const { conversationId, sender, text } = req.body;
    const message = await sendMessageService(conversationId, sender, text);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all messages of a conversation
exports.getMessages = async (req, res) => {
  try {
    const { conversationId } = req.body;
    const messages = await getMessagesService(conversationId);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
