import mongoose from "mongoose";
import { connectionString } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/libs/models/userModel";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id; // Access the 'id' from params
  await mongoose.connect(connectionString);
  const data = await User.findById(userId);

  console.log("TERI USER ID = ", data);
  return NextResponse.json({ resutlt: data });
}
