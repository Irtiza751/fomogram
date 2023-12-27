import { Navbar } from "./Navbar";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full bg-pattern">
      <Navbar isLogedin={false} />
      {children}
    </main>
  );
}
