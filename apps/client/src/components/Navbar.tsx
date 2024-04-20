"use client";
import Image from "next/image";
import { Button } from "@fomogram/ui";
import { fomo } from "@client/api/fomo";
import { useRouter } from "next/navigation";
import { NavLinks } from "./NavLinks";

export default function Navbar() {
  const router = useRouter();

  const onLogout = async () => {
    console.log("logging out...");
    const { data } = await fomo.get("/auth/logout");
    if (data) {
      router.replace("/login");
    }
  };

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
          <div className="col-span-2 lg:block hidden">
            <NavLinks />
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="justify-self-center lg:block hidden"
          >
            Logout
          </Button>
        </nav>
      </header>
    </>
  );
}
