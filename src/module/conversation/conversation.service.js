const Conversation = require('./Conversation.model');

exports.startConversationService = async (participants) => {
  if (participants.length < 2) {
    throw new Error("At least two participants are required");
  }

  let conversation = await Conversation.findOne({
    participants: { $all: participants },
  });

  // If not, create a new one
  if (!conversation) {
    conversation = await Conversation.create({ participants });
  }

  return conversation;
};

exports.getUserConversationsService = async (username) => {
  const conversations = await Conversation.find({
    participants: { $in: [username] },
  });
  return conversations;
};
