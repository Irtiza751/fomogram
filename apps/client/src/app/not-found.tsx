import { Button } from "@fomogram/ui";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header className="backdrop-blur-md bg-white/75 border-b py-4 mb-12">
        <nav className="container flex justify-center">
          <Image alt="Fomogram" src="/imgs/logo.svg" width={163} height={30} />
        </nav>
      </header>
      <main className="container">
        <div className="text-center max-w-2xl mx-auto py-8">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-gray-700 mb-10">
            Oops, something went wrong. <br /> Sorry, we couldn't find your
            page.
          </p>
          <Link href="/">
            <Button className="mx-auto">Back to Home</Button>
          </Link>
        </div>
      </main>
      <footer className="text-center mt-12 py-8 absolute bottom-0 w-full">
        <p className="text-gray-600">
          &copy; All Rights Reserved. {new Date().getFullYear()}.
        </p>
      </footer>
    </>
  );
}
