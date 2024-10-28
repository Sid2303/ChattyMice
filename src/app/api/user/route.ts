import {  NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/db";
import { User } from "@/libs/models/userModel";
import { loggedInUser } from "@/utils/getUser";

export async function GET() {
  await connectToDatabase();
  const data = await User.find().select('+password');
  const user = await loggedInUser();

  return NextResponse.json({ from: "User",user ,resutlt: data });
}
