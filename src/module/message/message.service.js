
const Message = require('./message.model');

//  Create (send) a new message
exports.sendMessageService = async (conversationId, sender, text) => {
  if (!conversationId || !sender || !text) {
    throw new Error("conversationId, sender, and text are required");
  }

  const message = await Message.create({ conversationId, sender, text });
  return message;
};

//  Get all messages for a specific conversation
exports.getMessagesService = async (conversationId) => {
  if (!conversationId) {
    throw new Error("conversationId is required");
  }

  const messages = await Message.find({ conversationId });
  return messages;
};
