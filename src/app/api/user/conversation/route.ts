import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  return NextResponse.json({ result: "Data from api/user/conversation!" });
}
