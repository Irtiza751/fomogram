import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type Methods = "get" | "post" | "put" | "patch" | "update" | "delete";

const url = process.env.NEXT_PUBLIC_BASE_URL;

async function handler(req: NextRequest) {
  const body = await req.json();
  const method = req.method.toLowerCase() as Methods;
  const params = req.nextUrl.pathname.split("/");
  const endpoint = params.slice(3, params.length).join("/");

  console.log(method, endpoint);

  try {
    const res = await axios({
      method,
      url: `${url}/${endpoint}`,
      headers: {
        Authorization: `Bearer ${cookies().get("__sessionToken")}`,
      },
      data: body,
    });

    cookies().set("__sessionToken", res.data.token, { httpOnly: true });
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("error happend!");
    return NextResponse.json(error);
  }
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as UPDATE,
  handler as DELETE,
};
