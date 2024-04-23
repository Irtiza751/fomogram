import "./globals.css";
import type { Metadata } from "next";
import { NavLinks } from "@client/components/NavLinks";

export const metadata: Metadata = {
  title: "Fomogram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <footer className="hidden lg:block text-center py-4 border-t">
          <p className="text-gray-600 text-md">
            &copy; All Rights Reserved. {new Date().getFullYear()}.
          </p>
        </footer>

        <div className="lg:hidden px-2 backdrop-blur-md bg-white/75 sticky bottom-0">
          <NavLinks />
        </div>
      </body>
    </html>
  );
}
