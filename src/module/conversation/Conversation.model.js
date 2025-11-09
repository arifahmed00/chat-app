const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    participants: [{ type: String, required: true }]
  },{ timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
