import type { Metadata } from "next";
import "./globals.css";
// import Link from "next/link";
// import { GitHub } from "react-feather";

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
        {/* <Link
          href="https://github.com/Irtiza751/fomogram"
          target="_blank"
          className="flex items-center justify-center py-2 px-4 space-x-2 rounded-full bg-transparen hover:bg-transparen hover:scale-125 ease-out duration-200 text-indigo-700 shadow-md hover:shadow-lg fixed bottom-10 left-28"
        >
          <GitHub size={15} />
          <span>Source Code</span>
        </Link> */}
        <footer className="text-center py-4 border-t">
          <p className="text-gray-600 text-md">
            &copy; All Rights Reserved. {new Date().getFullYear()}.
          </p>
        </footer>
      </body>
    </html>
  );
}
