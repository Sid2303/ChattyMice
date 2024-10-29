import mongoose, { Schema, Types } from "mongoose";

export interface Participants {
  name: string;
  phoneNo: number;
  pid: Types.ObjectId; // single ObjectId for each participant
}

export interface Conversation {
  _id: Types.ObjectId;
  category: "direct" | "group";
  participants: Participants[];
  createdAt: Date;
  updatedAt: Date;
}

// Define a schema for Participants
const participantSchema = new Schema<Participants>({
  name: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  pid: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

// Define the main Conversation schema
const conversationModel = new Schema<Conversation>({
  category: {
    type: String,
    required: true,
    enum: ["direct", "group"],
  },
  participants: {
    type: [participantSchema], 
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
