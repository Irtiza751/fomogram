"use client";
import Image from "next/image";
import { Button, Dialog, Spinner } from "@fomogram/ui";
import { fomo } from "@client/api/fomo";
import { useRouter } from "next/navigation";
import { NavLinks } from "./NavLinks";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogout = async () => {
    try {
      setLoading(true);
      console.log("logging out...");
      const { data } = await fomo.get("/auth/logout");
      if (data) {
        router.push("/login", { scroll: false });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
            onClick={() => setShowConfirm(true)}
            variant="outline"
            className="justify-self-center lg:block hidden"
          >
            Logout
          </Button>

          <Dialog show={showConfirm} onClose={() => setShowConfirm(false)}>
            <div className="bg-white max-w-sm mx-auto rounded-lg">
              <p className="text-lg text-center py-4 font-semibold mb-2">
                Are you sure you want logout?
              </p>
              <div className="grid grid-cols-2 border-t">
                <button
                  onClick={onLogout}
                  className="py-3 bg-red-500 hover:bg-red-600 rounded-bl-lg text-white flex justify-center"
                >
                  {loading ? <Spinner /> : "Yes"}
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="py-3 rounded-be-lg rounded-br-lg bg-stone-100 hover:bg-stone-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Dialog>
        </nav>
      </header>
    </>
  );
}
