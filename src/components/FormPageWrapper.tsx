import React from "react";

export const FormPageWrapper: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-xl font-bold">{title}</h1>
      {children}
    </div>
  );
};
