const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    participants: [
      { type: String, required: true } // usernames       
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
