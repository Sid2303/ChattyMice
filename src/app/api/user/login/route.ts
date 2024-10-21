import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/db";
import { User } from "@/libs/models/userModel";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/jwtToken";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  await connectToDatabase();

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }
  const isPasswordMatch = await bcrypt.compare(password, user?.password);
  if (!isPasswordMatch) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = generateToken(user);

  const response = NextResponse.json({ success: true });

  // Set the cookie
  await response.cookies.set("token", token, {
    httpOnly: true,
    path: "/", // Cookie available across the site
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ message: "Cookie deleted" });

  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return response;
}
