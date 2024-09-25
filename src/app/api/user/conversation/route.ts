import { NextRequest, NextResponse } from "next/server";
import { connectionString } from "@/libs/db";
import mongoose from "mongoose";
import { Conversation } from "@/libs/models/conversationModel";

export async function GET() {
  await mongoose.connect(connectionString);
  const data = await Conversation.find();
  return NextResponse.json({ from: "Conversation", result: data });
}

export async function POST(req: NextRequest) {
  await mongoose.connect(connectionString);
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

