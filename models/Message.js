const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    conversationId: { type: Schema.Types.ObjectId, ref: "Conversation", required: true },
    sender: { type: String, required: true }, // username
    text: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
