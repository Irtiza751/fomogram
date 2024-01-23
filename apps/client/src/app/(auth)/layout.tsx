import Image from "next/image";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed w-full z-10 backdrop-blur-md bg-white/75 border-b py-4">
        <nav className="container flex justify-center">
          <Link href="/">
            <Image
              alt="Fomogram"
              src="/imgs/logo.svg"
              width={163}
              height={30}
            />
          </Link>
        </nav>
      </header>
      <main className="h-full bg-pattern">{children}</main>
    </>
  );
}

export default layout;