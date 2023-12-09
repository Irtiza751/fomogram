import { twMerge } from "tailwind-merge";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={twMerge("border rounded-lg p-2", className)}>
      <code>{children}</code>
    </div>
  );
}
