"use client";

import React from "react";
import FormField from "./FormField";
import { emailSchema, passwordSchema } from "@/lib/schemas";

export const LoginFormFields: React.FC = () => {
  return (
    <>
      <FormField
        label="Email"
        name="email"
        placeholder="example@example.com"
        schema={emailSchema}
      />

      <FormField
        type="password"
        className="w-full"
        label="Password"
        name="password"
        placeholder="*******"
        schema={passwordSchema}
      />
    </>
  );
};
