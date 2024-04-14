"use client";

import Link from "next/link";
import { links } from "@client/data/links";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon } from "@fomogram/ui";
import { useState } from "react";
import NewPost from "./NewPost";

import { Dialog } from "@fomogram/ui";
import { fomo } from "@client/api/fomo";

export function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();
  const [showDialog, setShowDialog] = useState(false);

  const onLogout = async () => {
    console.log("logging out...");
    const { data } = await fomo.get("/auth/logout");
    if (data) {
      router.replace("/login");
    }
  };

  return (
    <>
      <Dialog show={showDialog} onClose={() => setShowDialog(false)}>
        <NewPost closeDialog={() => setShowDialog(false)} />
      </Dialog>

      <ul className="xl:flex lg:flex hidden gap-4 text-stone-800/50 -ml-24">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              scroll={link.path !== "/edit"}
              href={link.path === "/edit" ? "#edit" : link.path}
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
      <button
        onClick={onLogout}
        className="flex items-center gap-x-3 self-center text-stone-800/50"
      >
        <MenuIcon />
        <span>Logout</span>
      </button>
    </>
  );
}
