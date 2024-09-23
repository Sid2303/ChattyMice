import { NextRequest, NextResponse } from "next/server";
import { connectionString } from "@/libs/db";
import { User } from "@/libs/models/userModel";
import mongoose from "mongoose";

export async function GET() {
  await mongoose.connect(connectionString);
  const data = await User.find();
  console.log(data);
  return NextResponse.json({ resutlt: data });
}

export async function POST(req: NextRequest) {
  
  const { name, password, email } = await req.json();

  const newUser = new User({
    name: name,
    email: email,
    password: password,
  });
  newUser.save();
  return NextResponse.json({ result: "posted", data: newUser });
}
