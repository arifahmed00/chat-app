const Conversation = require('../conversation/Conversation.model');

exports.startConversation = async (req, res) => {
  const { participants } = req.body; // array of usernames
  if (participants.length < 2) {
    return res.status(400).json({ error: "At least two participants are required" });
  }

  try {
    let conversation = await Conversation.findOne({
      participants: { $all: participants }
    });

    if (!conversation) {
      conversation = await Conversation.create({ participants });
    }

    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserConversations = async (req, res) => {
  const { username } = req.params;
  try {
    const conversations = await Conversation.find({
      participants: { $in: [username] }
    });
    res.json(conversations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
