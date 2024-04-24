import { registerSchema } from "@/lib/schemas";
import { register } from "@/services/register";
import { formDataToObject } from "@/utils/formDataToObject";
import { redirect } from "next/navigation";

export const handleRegister = async (data: FormData) => {
  "use server";
  const results = registerSchema.safeParse(formDataToObject(data));
  if (!results.success) {
    throw new Error(results.error.errors[0].message);
  }
  const payload = results.data;
  const user = await register(payload);
  if (user.register.token.token) {
    redirect("/login");
  }
};
