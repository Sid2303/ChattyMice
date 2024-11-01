'use server';
import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";

export async function loggedInUser() {
  const value = cookies().get("token")?.value;
  if (!value) {
    console.log("No value");
  }
  const data = jwt.decode(value!);
  return data as User;
}

