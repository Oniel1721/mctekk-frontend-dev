"use client";

import React, { useState } from "react";
import Button from "./Button";

export const Form: React.FC<{
  children: React.ReactNode;
  buttonLabel: string;
  action: (data: FormData) => Promise<void>;
}> = ({ children, action, buttonLabel }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    try {
      await action(formData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4  border-2 border-gray-400 rounded px-8 py-4 max-w-lg"
      onSubmit={handleSubmit}
    >
      {children}
      <div className="text-red-500 text-xs">{error}</div>
      <Button disabled={loading}>{loading ? "Loading..." : buttonLabel}</Button>
    </form>
  );
};
