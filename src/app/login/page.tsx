"use server";

import { handleLogin } from "@/actions/login";
import Button from "@/components/Button";
import { Form } from "@/components/Form";
import { FormPageWrapper } from "@/components/FormPageWrapper";
import { LoginFormFields } from "@/components/LoginFormFields";
import { getToken } from "@/lib/cookies";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const token = await getToken();
  if (token) {
    redirect("/dashboard");
  }
  return (
    <FormPageWrapper title="Login">
      <Form action={handleLogin}>
        <LoginFormFields />
        <Button>Login</Button>
      </Form>
    </FormPageWrapper>
  );
}
