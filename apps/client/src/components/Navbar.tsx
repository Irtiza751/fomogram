import Image from "next/image";
import { NavLinks } from "./NavLinks";

export default function Navbar() {
  return (
    <>
      <header className="backdrop-blur-md bg-white/75 border-b lg:sticky top-0 z-10">
        <nav className="container grid grid-cols-4 items-center lg:py-0 py-4">
          <Image
            alt="Fomogram"
            src="/imgs/logo.svg"
            width={163}
            height={30}
            priority={true}
            className="lg:col-span-1 col-span-4 justify-self-center"
          />
          <NavLinks />
        </nav>
      </header>
    </>
  );
}
