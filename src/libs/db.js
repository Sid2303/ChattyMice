import mongoose from "mongoose";

const { name, password } = process.env;

export const connectionString =
  "mongodb+srv://" +
  name +
  ":" +
  password +
  "@cluster0.tglrx.mongodb.net/ChattyMiceDB?retryWrites=true&w=majority&appName=Cluster0";

export async function connectToDatabase() {
  await mongoose.connect(connectionString);
}

export async function getConversations() {
  try {
    await connectToDatabase();
    const chats = db.Conversations.find({ _id: "66f4162a51709f4f0ca5a777" });
    console.log(chats);
  } catch (e) {
    console.log(e);
  }
}
