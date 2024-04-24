"use server";

import { login } from "@/services/login";
import { formDataToObject } from "@/utils/formDataToObject";
import { redirect } from "next/navigation";
import { setToken } from "@/lib/cookies";
import { loginSchema } from "@/lib/schemas";

export async function handleLogin(data: FormData) {
  "use server";
  const results = loginSchema.safeParse(formDataToObject(data));
  if (!results.success) {
    throw new Error(results.error.errors[0].message);
  }
  const payload = results.data;
  const auth = await login(payload);
  setToken(auth.token, new Date(auth.token_expires));
  redirect("/dashboard");
}
