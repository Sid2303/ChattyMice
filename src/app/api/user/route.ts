import {  NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/db";
import { User } from "@/libs/models/userModel";

export async function GET() {
  await connectToDatabase();
  const data = await User.find().select('+password');
  
  return NextResponse.json({ from: "User", resutlt: data });
}
