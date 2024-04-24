"use server";

import { handleLogin } from "@/actions/login";
import { getToken } from "@/lib/cookies";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const token = await getToken();
  if (token) {
    redirect("/dashboard");
  }
  return (
    <div>
      <h1>Login</h1>
      <form action={handleLogin}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
