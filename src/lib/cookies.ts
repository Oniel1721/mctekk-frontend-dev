"use server";

import { cookies } from "next/headers";

enum CookiesKey {
  TOKEN = "token",
}

export async function setToken(token: string, expires: Date) {
  cookies().set({
    name: CookiesKey.TOKEN,
    value: token,
    expires,
    path: "/",
    httpOnly: true,
  });
}

export async function getToken() {
  return cookies().get(CookiesKey.TOKEN)?.value ?? "";
}

export async function deleteToken() {
  cookies().delete(CookiesKey.TOKEN);
}
