"use client";

import React from "react";
import FormField from "./FormField";
import { z } from "zod";

export const LoginFormFields: React.FC = () => {
  return (
    <>
      <FormField
        label="Email"
        name="email"
        placeholder="example@example.com"
        schema={z.string().email({ message: "Invalid email" })}
      />

      <FormField
        type="password"
        className="w-full"
        label="Password"
        name="password"
        placeholder="*******"
        schema={z
          .string()
          .min(8, { message: "Password must be at least 8 characters" })}
      />
    </>
  );
};
