import mongoose, { Schema, Types } from "mongoose";

export interface Conversation {
  _id: Types.ObjectId;
  category: "direct" | "group";
  participants: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
export const Conversation =
  mongoose.models.conversation ||
  mongoose.models.conversations ||
  mongoose.model("conversation", conversationModel);
