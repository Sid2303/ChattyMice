import mongoose from "mongoose";

const { username, password } = process.env;

export const connectionString =
  "mongodb+srv://" + username + ":" + password + "@cluster0.tglrx.mongodb.net/ChattyMiceDB?retryWrites=true&w=majority&appName=Cluster0"

export async function connectToDatabase(){
  await mongoose.connect(connectionString);
}