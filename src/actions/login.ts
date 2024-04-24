"use server";

import { login } from "@/services/login";
import { formDataToObject } from "@/utils/formDataToObject";
import { redirect } from "next/navigation";
import { z } from "zod";
import { setToken } from "@/lib/cookies";

const loginPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function handleLogin(data: FormData) {
  "use server";
  const results = loginPayloadSchema.safeParse(formDataToObject(data));
  if (!results.success) {
    console.log(results.error.errors);
    return;
  }
  const payload = results.data;
  const auth = await login(payload);
  setToken(auth.token, new Date(auth.token_expires));
  redirect("/dashboard");
}
