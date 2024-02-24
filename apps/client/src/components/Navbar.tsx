import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@fomogram/ui";
import { Home, Edit, Search, User, Heart } from "react-feather";

const links = [
  {
    link: "/",
    icon: <Home />,
  },
  {
    link: "/search",
    icon: <Search />,
  },
  {
    link: "/edit",
    icon: <Edit />,
  },
  {
    link: "/heart",
    icon: <Heart />,
  },
  {
    link: "/profile",
    icon: <User />,
  },
];

export default function Navbar() {
  return (
    <header className="backdrop-blur-md bg-white/75 border-b">
      <nav className="container flex justify-between">
        <Image
          alt="Fomogram"
          src="/imgs/logo.svg"
          priority={true}
          width={163}
          height={30}
        />
        <ul className="flex gap-4 text-stone-800/50 -ml-24">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.link}
                className="block border-b-2 px-6 py-5 border-transparent hover:border-indigo-600"
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
  );
}
