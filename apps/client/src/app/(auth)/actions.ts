"use server";

import { cookies } from "next/headers";

export async function makeSession(token: string) {
  const cookie = cookies().set({
    name: "__sessionToken",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return cookie;
}
