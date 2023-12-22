import { Navbar } from "./Navbar";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Navbar isLogedin={true} />
      {children}
    </main>
  );
}
