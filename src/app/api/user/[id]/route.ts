import mongoose from "mongoose";
import { connectionString } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("id of the get fucntion = " + params.id);
  console.log(req.body);
  await mongoose.connect(connectionString);
  return NextResponse.json({ resutlt: params.id });
}
