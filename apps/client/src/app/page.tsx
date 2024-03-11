import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="z-10 backdrop-blur-md bg-white/75 border-b py-4 mb-3">
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
      <main className="container pt-10 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Landing page will be here comming soon
        </h1>
      </main>
    </>
  );
}
