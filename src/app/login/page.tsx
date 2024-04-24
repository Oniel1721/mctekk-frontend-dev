"use server";

import { handleLogin } from "@/actions/login";
import { Form } from "@/components/Form";
import { FormPageWrapper } from "@/components/FormPageWrapper";
import { LoginFormFields } from "@/components/LoginFormFields";
import { getToken } from "@/lib/cookies";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const token = await getToken();
  if (token) {
    redirect("/dashboard");
  }
  return (
    <FormPageWrapper title="Login">
      <Form buttonLabel="Login" action={handleLogin}>
        <LoginFormFields />
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </Form>
    </FormPageWrapper>
  );
}
