import { Link } from "react-router-dom";
import { Home, Edit, Search, User, Menu } from "react-feather";

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
            <ul className="flex gap-4 text-stone-500 -ml-20">
              <li className="px-6 py-5 border-b-2 border-indigo-600 text-indigo-600">
                <Home />
              </li>
              <li className="px-6 py-5 border-b-2 border-transparent hover:border-indigo-600">
                <Search />
              </li>
              <li className="px-6 py-5 border-b-2 border-transparent hover:border-indigo-600">
                <Edit />
              </li>
              <li className="px-6 py-5 border-b-2 border-transparent hover:border-indigo-600">
                <User />
              </li>
            </ul>

            <button>
              <Menu />
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}
