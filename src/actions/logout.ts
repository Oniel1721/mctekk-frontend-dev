import { deleteToken } from "../lib/cookies";

export async function handleLogout() {
  await deleteToken();
}
