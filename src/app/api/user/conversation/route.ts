import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/db";
import { Conversation } from "@/libs/models/conversationModel";

export async function GET() {
  await connectToDatabase();
  const data = await Conversation.find();
  return NextResponse.json({ from: "Conversation", result: data });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { category, participants } = await req.json();

  if (category || participants) {
    const newConvo = new Conversation({
      category: category,
      participants: participants,
    });
    newConvo.save();

    console.log(newConvo);
    return NextResponse.json({ result: newConvo });
  } else {
    return NextResponse.json({ result: "Unable to get data! "});
  }
}

