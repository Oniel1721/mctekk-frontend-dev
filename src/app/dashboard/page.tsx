"use server";

import { LogoutButton } from "@/components/LogoutButton";
import { getToken } from "@/lib/cookies";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const token = await getToken();
  if (!token) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <LogoutButton />
    </div>
  );
}
