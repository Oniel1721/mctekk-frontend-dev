"use server";

import { apiClient } from "../lib/api-client";

type UserInfo = {
  uuid: string;
  firstname: string;
  email: string;
};

export async function getUserInfo(): Promise<UserInfo> {
  const { uuid, firstname, email } = await apiClient.users.getUserData();
  return {
    uuid,
    firstname,
    email,
  };
}
