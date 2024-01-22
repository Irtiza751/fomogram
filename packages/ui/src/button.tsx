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
        "flex justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        className
      )}
    >
      {children}
    </button>
  );
}
