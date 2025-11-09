const {
  startConversationService,
  getUserConversationsService,
} = require('./conversation.service');

exports.startConversation = async (req, res) => {
  try {
    const { participants } = req.body;
    const conversation = await startConversationService(participants);
    res.status(200).json(conversation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserConversations = async (req, res) => {
  try {
    const username = req.params.username
    const conversations = await getUserConversationsService(username);
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
