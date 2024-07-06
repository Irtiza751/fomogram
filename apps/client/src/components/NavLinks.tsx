"use client";
import Link from "next/link";
import { links } from "@client/data/links";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import NewPost from "./NewPost";

import { Dialog } from "@fomogram/ui";
import { SocketContext } from "@client/providers/notification";

export function NavLinks() {
  const pathname = usePathname();
  const [showDialog, setShowDialog] = useState(false);
  const socket = useContext(SocketContext);

  return (
    <>
      <Dialog show={showDialog} onClose={() => setShowDialog(false)}>
        <NewPost closeDialog={() => setShowDialog(false)} />
      </Dialog>
      <ul className="flex lg:gap-4 justify-center text-stone-800/50">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              scroll={false}
              href={link.path === "/edit" ? "#edit" : link.path}
              onClick={() => {
                if (link.path === "/edit") {
                  setShowDialog(true);
                }
              }}
              className={`relative block border-b-2 px-6 py-5 hover:border-indigo-600 ${
                pathname === link.path
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent"
              }`}
            >
              {link.path === "/activities" && socket?.notification ? (
                <span className="absolute top-5 right-6 w-2 h-2 rounded-full bg-red-500" />
              ) : null}
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
