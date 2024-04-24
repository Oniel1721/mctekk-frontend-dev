"use server";

import { redirect } from "next/navigation";
import { getToken } from "@/lib/cookies";
import { handleRegister } from "@/actions/register";
import { Form } from "@/components/Form";
import { FormPageWrapper } from "@/components/FormPageWrapper";
import { RegisterFormFields } from "@/components/RegisterFormFields";
import Link from "next/link";

export default async function RegisterPage() {
  const token = await getToken();
  if (token) {
    redirect("/dashboard");
  }

  return (
    <FormPageWrapper title="Register">
      <Form buttonLabel="Register" action={handleRegister}>
        <RegisterFormFields />
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </Form>
    </FormPageWrapper>
  );
}
