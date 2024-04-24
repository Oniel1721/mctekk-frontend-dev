import { register } from "@/services/register";
import { formDataToObject } from "@/utils/formDataToObject";
import { redirect } from "next/navigation";
import { z } from "zod";

const registerPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
  firstname: z.string(),
  lastname: z.string(),
});

export const handleRegister = async (data: FormData) => {
  "use server";
  const results = registerPayloadSchema.safeParse(formDataToObject(data));
  if (!results.success) {
    console.log(results.error.errors);
    return;
  }
  const payload = results.data;
  const user = await register(payload);
  if (user.register.token.token) {
    redirect("/login");
  }
};
