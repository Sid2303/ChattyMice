import { NextRequest, NextResponse } from "next/server";

import { User } from "@/libs/models/userModel";
import { connectToDatabase } from "@/libs/db";
import { hashPassword } from "@/utils/hashPass";
export async function POST(req: NextRequest) {
  const { name, password, email } = await req.json();
  await connectToDatabase();
  let newUser;

  if (name || password || email) {
    const pass = await hashPassword(password);
    newUser = new User({
      name: name,
      email: email,
      password: pass,
    });
    console.log(newUser);
    await newUser.save();
  } else {
    return NextResponse.json({ res: "Unable to get inputs!" });
  }
  return NextResponse.json({
    message: "User created successfully",
    user: newUser,
  });
}

