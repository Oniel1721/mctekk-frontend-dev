"use client";

import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import { ZodSchema, z } from "zod";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type FormFieldProps = {
  value?: string;
  onChange?: (value: string) => void;
  type?: InputProps["type"];
  className?: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  schema?: ZodSchema;
};

export default function FormField({
  className,
  label,
  name,
  type = "text",
  required = true,
  placeholder,
  schema = z.any(),
}: FormFieldProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  const validate = useCallback(() => {
    const results = schema.safeParse(value);
    if (!results.success) {
      setError(results.error.errors[0].message);
      setValid(false);
    } else {
      setError("");
      setValid(true);
    }
  }, [value, schema]);

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        onBlur={validate}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        type={type}
        name={name}
        className={`w-full outline-none p-1 focus-visible:outline-indigo-500 outline-gray-200 ${
          valid ? "outline-green-500" : ""
        } ${error ? "outline-red-500" : ""} ${className}`}
        required={required}
      />
      <div className="text-red-500 text-xs">{error}</div>
    </div>
  );
}
