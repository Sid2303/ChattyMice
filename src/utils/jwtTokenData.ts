/* eslint-disable @typescript-eslint/no-explicit-any */
import Error from "next/error";
import { NextRequest } from "next/server";
import * as jwt from "jsonwebtoken";

const secretKey = "your-secret-key";

export async function getTokenData(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedData:any = jwt.verify(token, secretKey);
    return decodedData?.userId;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
