"use client";

import React from "react";
import FormField from "./FormField";
import {
  emailSchema,
  firstnameSchema,
  lastnameSchema,
  passwordSchema,
} from "../lib/schemas";

export const RegisterFormFields: React.FC = () => {
  return (
    <>
      <FormField
        label="Email"
        name="email"
        placeholder="example@example.com"
        schema={emailSchema}
      />
      <div className="flex gap-4">
        <FormField
          label="First Name"
          name="firstname"
          placeholder="John"
          schema={firstnameSchema}
        />
        <FormField
          label="Last Name"
          name="lastname"
          placeholder="Doe"
          schema={lastnameSchema}
        />
      </div>
      <div className="flex gap-4">
        <FormField
          type="password"
          className="w-full"
          label="Password"
          name="password"
          placeholder="*******"
          schema={passwordSchema}
        />
        <FormField
          type="password"
          label="Confirm Password"
          name="password_confirmation"
          placeholder="*******"
          schema={passwordSchema}
        />
      </div>
    </>
  );
};
