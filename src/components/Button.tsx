type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded bg-slate-800 text-white w-full py-2 font-medium uppercase">
      {children}
    </button>
  );
}
