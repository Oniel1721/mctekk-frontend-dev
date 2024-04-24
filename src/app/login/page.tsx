import { login } from "@/services/login";
import { formDataToObject } from "../../utils/formDataToObject";
import { z } from "zod";

const loginPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginPage() {
  const handleLogin = async (data: FormData) => {
    "use server";
    const results = loginPayloadSchema.safeParse(formDataToObject(data));
    if (!results.success) {
      console.log(results.error.errors);
      return;
    }
    const payload = results.data;
    const auth = await login(payload);
    console.log(auth);
  };

  return (
    <div>
      <h1>Login</h1>
      <form action={handleLogin}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
