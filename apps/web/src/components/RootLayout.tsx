import { Navbar } from "./Navbar";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Navbar isLogedin={true} />
      <div className="container pt-24 max-w-3xl">{children}</div>
    </main>
  );
}
