"use server";

import { LogoutButton } from "@/components/LogoutButton";
import { getToken } from "@/lib/cookies";
import { getUserInfo } from "@/services/get-user-info";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const token = await getToken();
  if (!token) {
    redirect("/login");
  }
  const user = await getUserInfo();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome back, {user.firstname}!</p>
      <p>Id: {user.uuid}</p>
      <p>Email: {user.email}</p>
      <LogoutButton />
    </div>
  );
}
