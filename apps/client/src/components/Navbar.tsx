import Image from "next/image";

import { MenuIcon } from "@fomogram/ui";
import { NavLinks } from "./NavLinks";

export default function Navbar() {
  return (
    <>
      <header className="backdrop-blur-md bg-white/75 border-b sticky top-0 z-10">
        <nav className="container flex justify-between xl:py-0 lg:py-0 py-4">
          <Image
            alt="Fomogram"
            src="/imgs/logo.svg"
            width={163}
            height={30}
            priority={true}
          />
          <NavLinks />
          <button className="self-center text-stone-800/50">
            <MenuIcon />
          </button>
        </nav>
      </header>
    </>
  );
}
