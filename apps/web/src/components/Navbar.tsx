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
      className={`border-b fixed w-full z-10 backdrop-blur-md ${
        !isLogedin ? "py-3" : ""
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
            <ul className="flex gap-4 text-stone-800/50 -ml-20">
              {/* <li className="px-6 py-5 border-b-2 border-indigo-600 text-indigo-600">
                <Home />
              </li> */}
              {links.map((link) => (
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `border-b-2 ${
                      isActive
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent hover:border-indigo-600"
                    }`
                  }
                >
                  <li className="px-6 py-5">{link.icon}</li>
                </NavLink>
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
