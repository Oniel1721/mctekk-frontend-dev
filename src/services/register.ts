"use server";

import { apiClient } from "@/lib/api-client";

type RegisterPayload = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  password_confirmation: string;
};

type RegisterResponse = {
  register: {
    user: {
      id: string;
      displayname: string;
      uuid: string;
      __typename: string;
    };
    token: {
      token: string;
      refresh_token: string;
      token_expires: string;
      refresh_token_expires: string;
      time: string;
      timezone: string;
      __typename: string;
    };
    __typename: string;
  };
};

export async function register({
  email,
  password,
  firstname,
  password_confirmation,
  lastname,
}: RegisterPayload): Promise<RegisterResponse> {
  const registerResopnse = (await apiClient.users.register({
    email,
    password,
    password_confirmation,
    firstname,
    lastname,
  })) as any;
  return registerResopnse as RegisterResponse;
}
