import { NextRequest, NextResponse } from "next/server";
import { connectionString } from "@/libs/db";
import { User } from "@/libs/models/userModel";
import mongoose from "mongoose";

export async function GET() {
  await mongoose.connect(connectionString);
  const data = await User.find();
  const model = mongoose.models;
  console.log(model);
  return NextResponse.json({ from: "User", resutlt: data });
}

export async function POST(req: NextRequest) {
  await mongoose.connect(connectionString);
  const { name, password, email } = await req.json();
  let newUser;
  
  if (name || password || email) {
    newUser = new User({
      name: name,
      email: email,
      password: password,
    });
    console.log(newUser);
    await newUser.save();
  } else {
    return NextResponse.json({ res: "Unable to get fields" });
  }

  return NextResponse.json({ result: "posted", data: newUser });
}
