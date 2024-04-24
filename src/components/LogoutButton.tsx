"use client";

import { handleLogout } from "../actions/logout";

export function LogoutButton() {
  return <button onClick={handleLogout}>Logout</button>;
}
