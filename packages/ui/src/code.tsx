export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`bg-purple-700 text-white`}>
      <code>{children}</code>
    </div>
  );
}
