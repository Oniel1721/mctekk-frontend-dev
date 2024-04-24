import React from "react";

export const Form: React.FC<{
  children: React.ReactNode;
  action: (data: FormData) => Promise<void>;
}> = ({ children, action }) => {
  return (
    <form
      className="flex flex-col gap-4  border-2 border-gray-400 rounded px-8 py-4"
      action={action}
    >
      {children}
    </form>
  );
};
