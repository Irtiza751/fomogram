import { Link, NavLink } from "react-router-dom";
import { Home, Edit, Search, User, Heart } from "react-feather";
import { MenuIcon } from "@fomogram/ui/icons";

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
    link: "/user",
    icon: <User />,
  },
];

type NavbarProps = {
  isLogedin?: boolean;
};

export function Navbar({ isLogedin = false }: NavbarProps) {
  return (
    <nav
      className={`fixed w-full z-10 backdrop-blur-md bg-white/75 ${
        !isLogedin ? "border-b py-4" : ""
      }`}
    >
      <div
        className={`container flex ${
          isLogedin ? "justify-between" : "justify-center"
        } items-center`}
      >
        <Link to="/">
          <img src="/logo.svg" alt="Fomogram" />
        </Link>

        {isLogedin ? (
          <>
            <ul className="flex gap-4 text-stone-800/50 -ml-24">
              {links.map((link) => (
                <li>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `block border-b-2 px-6 py-5 ${
                        isActive
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent hover:border-indigo-600"
                      }`
                    }
                  >
                    {link.icon}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className="text-stone-800/50">
              <MenuIcon />
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}
