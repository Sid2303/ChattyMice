import mongoose, { Schema, Types } from "mongoose";

export interface Conversation {
  _id: Types.ObjectId;
  category: "direct" | "group";
  participants: Types.ObjectId[];
  messages: Types.ObjectId[];
}

const conversationModel = new Schema<Conversation>({
  category: {
    type: String,
    required: true,
    enum: ["direct", "group"],
  },
  participants: {
    type: [Types.ObjectId],
    required: true,
  },
  messages: {
    type: [Types.ObjectId],
    default: [],
  },
});

export const Conversation =
  mongoose.models.coversation ||
  mongoose.model("conversation", conversationModel);
