import { z } from "zod";
import { formDataToObject } from "../utils/formDataToObject";
import { register } from "@/services/register";

const registerPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
  firstname: z.string(),
  lastname: z.string(),
});

export default function RegisterPage() {
  const handleRegister = async (data: FormData) => {
    "use server";
    const results = registerPayloadSchema.safeParse(formDataToObject(data));
    if (!results.success) {
      console.log(results.error.errors);
      return;
    }
    const payload = results.data;
    const user = await register(payload);
    console.log(user);
  };
  return (
    <div>
      <h1>Register</h1>
      <form action={handleRegister}>
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
