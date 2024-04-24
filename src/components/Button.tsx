type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ children, disabled }: ButtonProps) {
  const color = disabled ? "bg-gray-400" : "bg-blue-500 text-white";
  return (
    <button className={`rounded w-full py-2 font-medium uppercase ${color}`}>
      {children}
    </button>
  );
}
