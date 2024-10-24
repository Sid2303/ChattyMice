import { connectToDatabase } from "@/libs/db";
import { Message } from "@/libs/models/messageModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectToDatabase();
  const data = await Message.find();
  console.log(req);
  return NextResponse.json({ from: "Messages", result: data });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { senderId, conversationId, text } = await req.json();

  if (senderId || conversationId || text) {
    const newMessage = new Message({
      senderId: senderId,
      conversationId: conversationId,
      text: text,
    });
    newMessage.save();
    console.log(newMessage);
    return NextResponse.json({ result: newMessage });
  } else {
    return NextResponse.json({ result: "Unable to get data! " });
  }
}


