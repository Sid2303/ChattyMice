import mongoose from "mongoose";
import { connectionString } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
// import { User } from "@/libs/models/userModel";

export async function GET(req: NextRequest, { params }: { params: { id: string }}) {
  console.log(params);
  await mongoose.connect(connectionString);
  return NextResponse.json({ resutlt: params.id });
}
