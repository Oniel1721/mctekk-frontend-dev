"use server";

import { apiClient } from "@/lib/api-client";

type LoginPayload = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginPayload) {
  const auth = await apiClient.auth.login(email, password);
  return auth;
}
