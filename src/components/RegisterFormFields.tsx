"use client";

import React from "react";
import FormField from "./FormField";
import { z } from "zod";

export const RegisterFormFields: React.FC = () => {
  return (
    <>
      <FormField
        label="Email"
        name="email"
        placeholder="example@example.com"
        schema={z.string().email({ message: "Invalid email" })}
      />
      <div className="flex gap-4">
        <FormField
          label="First Name"
          name="firstname"
          placeholder="John"
          schema={z.string().min(1, { message: "First Name is required" })}
        />
        <FormField
          label="Last Name"
          name="lastname"
          placeholder="Doe"
          schema={z.string().min(1, { message: "Last Name is required" })}
        />
      </div>
      <div className="flex gap-4">
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
        <FormField
          type="password"
          label="Confirm Password"
          name="password_confirmation"
          placeholder="*******"
          schema={z
            .string()
            .min(8, { message: "Password must be at least 8 characters" })}
        />
      </div>
    </>
  );
};
