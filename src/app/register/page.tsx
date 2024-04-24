"use server";

import { redirect } from "next/navigation";
import { getToken } from "@/lib/cookies";
import { handleRegister } from "@/actions/register";

export default async function RegisterPage() {
  const token = await getToken();
  if (token) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1>Register</h1>
      <form action={handleRegister}>
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
