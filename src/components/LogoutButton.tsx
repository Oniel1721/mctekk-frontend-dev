"use client";

import { useRouter } from "next/navigation";
import { handleLogout } from "../actions/logout";

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={async () => {
        await handleLogout();
        router.push("/login");
      }}
    >
      Logout
    </button>
  );
}
