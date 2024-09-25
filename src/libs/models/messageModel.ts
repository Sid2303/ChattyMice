import mongoose, { Schema, Types } from 'mongoose';

export interface Message {
  _id: Types.ObjectId;
  senderId: unknown;
  conversationId: unknown;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<Message>({
  senderId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  conversationId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

messageSchema.pre('save', function(next) {
  this.updatedAt = new Date(Date.now());  
  next();
});

export const Message =  mongoose.models.message || mongoose.model('message', messageSchema);