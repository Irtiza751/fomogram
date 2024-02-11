"use server";
import { fomo } from "@client/api/fomo";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { Credentials } from "./login/page";

type LoginResponse = {
  token: string;
  res: "OK";
};

export async function loginAction(payload: Credentials): Promise<string> {
  try {
    const { data } = await fomo.post<LoginResponse>("/auth/login", payload);
    cookies().set("_token", data.token, { httpOnly: true });
    revalidatePath("/login");
    return "ok";
  } catch (error: any) {
    return error;
  }
}
