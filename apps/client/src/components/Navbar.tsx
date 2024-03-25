"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Dialog, Input, MenuIcon } from "@fomogram/ui";
import { links } from "@client/data/links";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Dialog show={showDialog} onClose={() => setShowDialog(false)}>
        <form className="bg-white rounded-lg p-4 max-w-96 w-full">
          <h1>Create new Post</h1>
          <br />
          <textarea className="w-full outline-none min-h-6 h-max border-l-2 px-2"></textarea>
          <br />
          <Button className="w-full">Post</Button>
        </form>
      </Dialog>

      <header className="backdrop-blur-md bg-white/75 border-b sticky top-0 z-10">
        <nav className="container flex justify-between xl:py-0 lg:py-0 py-4">
          <Image
            alt="Fomogram"
            src="/imgs/logo.svg"
            priority={true}
            width={163}
            height={30}
          />
          <ul className="xl:flex lg:flex hidden gap-4 text-stone-800/50 -ml-24">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path !== "/edit" ? link.path : "/"}
                  onClick={() => {
                    if (link.path === "/edit") {
                      setShowDialog(true);
                    }
                  }}
                  className={`block border-b-2 px-6 py-5 border-transparent hover:border-indigo-600 ${
                    pathname === link.path ? "border-indigo-600" : ""
                  }`}
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
          <button className="self-center text-stone-800/50">
            <MenuIcon />
          </button>
        </nav>
      </header>
    </>
  );
}
