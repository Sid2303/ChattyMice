import { connectToDatabase } from "@/libs/db";
import { Message } from "@/libs/models/messageModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const cid = searchParams.get("cid");
  const sid = searchParams.get("sid");
  console.log(cid, sid);

  await connectToDatabase();

  try {
    const query = cid
      ? sid
        ? { conversationId: cid, senderId: sid }
        : { conversationId: cid }
      : {};
    // Query the messages collection
    console.log(query);
    const message = await Message.find(query).exec();
    console.log("MESSAGESSS:", message);
    return NextResponse.json({
      from: "Messages",
      result: message as Message[],
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
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
    return NextResponse.json({ result: newMessage });
  } else {
    return NextResponse.json({ result: "Unable to get data! " });
  }
}

// const CID = askfjldsjt;
//const SID = jdghsjgha;

//api/user/conversation/messages?cid=${CID}&sid=${SID};
