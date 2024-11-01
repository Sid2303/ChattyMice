import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/db";
import { Conversation, Participants } from "@/libs/models/conversationModel";
export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { category, participants } = await req.json();

  if (category && participants) {
    const newConvo = new Conversation({
      category: category,
      participants: participants,
    });

    const convo = await newConvo.save();
    return NextResponse.json({ result: newConvo });
  } else {
    return NextResponse.json({ result: "Unable to get data! " });
  }
}

export async function GET(req: NextRequest) {
  await connectToDatabase();
  const data = await Conversation.find();
  return NextResponse.json({ from: "Conversation", result: data });
}
