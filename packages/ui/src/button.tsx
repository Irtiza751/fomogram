import { twMerge } from "tailwind-merge";

export function Button({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={twMerge(
        "bg-purple-700 hover:bg-purple-600 text-white py-2 px-3 rounded-md",
        className
      )}
    >
      {children}
    </button>
  );
}
