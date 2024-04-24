import { deleteToken } from "@/lib/cookies";
import { redirect } from "next/navigation";

export async function handleLogout() {
  await deleteToken();
  redirect("/login");
}
