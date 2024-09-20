/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { connectionString } from "@/libs/db";
import { User } from "@/libs/models/userModel";
import mongoose from "mongoose";

export async function GET() {
  
  const db = await mongoose.connect(connectionString);
  const data = await User.find();
  console.log(data);
  return NextResponse.json({ resutlt: data });
}

export async function POST() {

  const newUser = new User({
    name: "Balux",
    password: "pqrsty",
  });
  newUser.save();
  return NextResponse.json({ result: "posted", data: newUser });
}
