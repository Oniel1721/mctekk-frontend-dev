"use server";

import { LogoutButton } from "../../components/LogoutButton";
import { getToken } from "../../lib/cookies";
import { getUserInfo } from "../../services/get-user-info";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const token = await getToken();
  if (!token) {
    redirect("/login");
  }
  const user = await getUserInfo();
  return (
    <div className="p-8 flex flex-col justify-between min-h-screen">
      <main>
        <h1 className="text-2xl m-0">
          Welcome{" "}
          <strong className="text-blue-400 font-bold">{user.firstname}</strong>!
        </h1>
        <code>{user.uuid}</code>
        <p className="italic text-sm">{user.email}</p>
      </main>
      <footer>
        <LogoutButton />
      </footer>
    </div>
  );
}
