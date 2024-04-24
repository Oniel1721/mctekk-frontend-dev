"use server";

import { redirect } from "next/navigation";
import { getToken } from "@/lib/cookies";
import { handleRegister } from "@/actions/register";
import { Form } from "@/components/Form";
import { FormPageWrapper } from "@/components/FormPageWrapper";
import { RegisterFormFields } from "@/components/RegisterFormFields";
import Button from "@/components/Button";

export default async function RegisterPage() {
  const token = await getToken();
  if (token) {
    redirect("/dashboard");
  }

  return (
    <FormPageWrapper title="Register">
      <Form action={handleRegister}>
        <RegisterFormFields />
        <Button>Register</Button>
      </Form>
    </FormPageWrapper>
  );
}
